import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Trash2, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { getBookmarks, removeBookmark as removeBookmarkUtil } from '../utils/bookmarks';
import './Bookmarks.css';

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setBookmarks(getBookmarks());
    const onStorage = () => setBookmarks(getBookmarks());
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const removeBookmark = (id, e) => {
    e.stopPropagation();
    const next = removeBookmarkUtil(id);
    setBookmarks(next);
  };

  const getCategoryIcon = (category) => {
    if (category.includes('Rig Hub')) return '🛢️';
    if (category.includes('General')) return '📚';
    return '📄';
  };

  const getCategoryColor = (category) => {
    if (category.includes('Rig Hub')) return 'rig-hub-category';
    if (category.includes('General')) return 'general-category';
    return 'article-category';
  };

  return (
    <div className="page">
      <Header title="Bookmarks" showBack={false} />
      
      <div className="page-content">
        <div className="bookmarks-header">
          <div className="header-content">
            <div className="header-icon">
              <Sparkles size={24} />
            </div>
            <div className="header-text">
              <h2 className="header-title">My Bookmarks</h2>
              <p className="bookmarks-count">{bookmarks.length} saved {bookmarks.length === 1 ? 'item' : 'items'}</p>
            </div>
          </div>
        </div>

        {bookmarks.length > 0 ? (
          <div className="bookmarks-list">
            {bookmarks.map((bookmark, index) => (
              <div
                key={bookmark.id}
                className="bookmark-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="bookmark-ribbon"></div>
                <div 
                  className="bookmark-main"
                  onClick={() => navigate(bookmark.path || `/article/${bookmark.id}`)}
                >
                  <div className="bookmark-icon-wrapper">
                    <BookOpen size={24} className="bookmark-icon" />
                  </div>
                  <div className="bookmark-content">
                    <h3 className="bookmark-title">{bookmark.title}</h3>
                    <div className={`bookmark-category ${getCategoryColor(bookmark.category)}`}>
                      <span className="category-icon">{getCategoryIcon(bookmark.category)}</span>
                      <span className="category-text">{bookmark.category}</span>
                    </div>
                    <div className="bookmark-progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${bookmark.progress}%` }}
                      ></div>
                    </div>
                    <p className="progress-text">{bookmark.progress}% completed</p>
                  </div>
                  <ArrowRight size={20} className="arrow-icon" />
                </div>
                <div className="bookmark-actions">
                  <button
                    className="action-button remove-button"
                    onClick={(e) => removeBookmark(bookmark.id, e)}
                    title="Remove bookmark"
                  >
                    <Trash2 size={16} />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-bookmarks">
            <div className="empty-icon">🔖</div>
            <h3 className="empty-title">No Bookmarks Yet</h3>
            <p className="empty-text">
              Start bookmarking your favorite articles and chapters for quick access
            </p>
            <button 
              className="browse-button"
              onClick={() => navigate('/handbook')}
            >
              <BookOpen size={20} />
              <span>Browse Handbooks</span>
            </button>
          </div>
        )}

        {bookmarks.length > 0 && (
          <div className="bookmark-added-notification">
            <p className="notification-text">Bookmark added</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookmarks;
