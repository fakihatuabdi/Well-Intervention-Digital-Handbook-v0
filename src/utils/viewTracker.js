// Utility untuk tracking artikel yang dibaca
const VIEW_STORAGE_KEY = 'article_views';

export const getArticleViews = () => {
  const stored = localStorage.getItem(VIEW_STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
};

export const incrementArticleView = (handbookId, chapterId, chapterTitle) => {
  const views = getArticleViews();
  const key = `${handbookId}-${chapterId}`;
  
  if (!views[key]) {
    views[key] = {
      handbookId,
      chapterId,
      title: chapterTitle,
      views: 0,
      lastViewed: null
    };
  }
  
  views[key].views += 1;
  views[key].lastViewed = new Date().toISOString();
  
  localStorage.setItem(VIEW_STORAGE_KEY, JSON.stringify(views));
  return views[key].views;
};

export const getTopArticles = (limit = 5) => {
  const views = getArticleViews();
  const articles = Object.values(views);
  
  // Sort by views descending
  articles.sort((a, b) => b.views - a.views);
  
  return articles.slice(0, limit);
};

export const getArticleViewCount = (handbookId, chapterId) => {
  const views = getArticleViews();
  const key = `${handbookId}-${chapterId}`;
  return views[key] ? views[key].views : 0;
};
