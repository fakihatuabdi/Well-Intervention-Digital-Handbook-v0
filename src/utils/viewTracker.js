// Utility untuk tracking artikel yang dibaca secara global menggunakan Firebase
import { database } from '../config/firebase';
import { ref, set, get, runTransaction, onValue } from 'firebase/database';

// Increment view count for a chapter (global counter for all users)
export const incrementArticleView = async (handbookId, chapterId, chapterTitle) => {
  const key = `${handbookId}-${chapterId}`;
  const articleRef = ref(database, `articleViews/${key}`);
  
  try {
    // Use transaction to safely increment counter
    await runTransaction(articleRef, (currentData) => {
      if (currentData === null) {
        // First time this article is viewed
        return {
          handbookId,
          chapterId,
          title: chapterTitle,
          views: 1,
          lastViewed: new Date().toISOString()
        };
      } else {
        // Increment existing view count
        return {
          ...currentData,
          views: (currentData.views || 0) + 1,
          lastViewed: new Date().toISOString()
        };
      }
    });
  } catch (error) {
    console.error('Error incrementing view count:', error);
  }
};

// Get all article views (for internal use)
export const getArticleViews = async () => {
  const viewsRef = ref(database, 'articleViews');
  
  try {
    const snapshot = await get(viewsRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return {};
  } catch (error) {
    console.error('Error fetching article views:', error);
    return {};
  }
};

// Get top articles by view count
export const getTopArticles = async (limit = 5) => {
  const views = await getArticleViews();
  const articles = Object.values(views);
  
  // Sort by views descending
  articles.sort((a, b) => (b.views || 0) - (a.views || 0));
  
  return articles.slice(0, limit);
};

// Get view count for a specific article
export const getArticleViewCount = async (handbookId, chapterId) => {
  const key = `${handbookId}-${chapterId}`;
  const articleRef = ref(database, `articleViews/${key}`);
  
  try {
    const snapshot = await get(articleRef);
    if (snapshot.exists()) {
      return snapshot.val().views || 0;
    }
    return 0;
  } catch (error) {
    console.error('Error fetching view count:', error);
    return 0;
  }
};

// Listen to real-time updates for top articles
export const subscribeToTopArticles = (limit = 5, callback) => {
  const viewsRef = ref(database, 'articleViews');
  
  return onValue(viewsRef, (snapshot) => {
    if (snapshot.exists()) {
      const views = snapshot.val();
      const articles = Object.values(views);
      
      // Sort by views descending
      articles.sort((a, b) => (b.views || 0) - (a.views || 0));
      
      callback(articles.slice(0, limit));
    } else {
      callback([]);
    }
  }, (error) => {
    console.error('Error subscribing to article views:', error);
    callback([]);
  });
};
