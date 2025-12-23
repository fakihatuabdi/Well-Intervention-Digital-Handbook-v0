import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Trash2 } from 'lucide-react';
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

  return (
    <div className="page">
      <Header title="Bookmarks" showBack={false} />
      
      <div className="page-content">
        <div className="bookmarks-header">
          <p className="bookmarks-count">{bookmarks.length} items</p>
        </div>

        {bookmarks.length > 0 ? (
          <div className="bookmarks-list">
            {bookmarks.map((bookmark) => (
              <div
                key={bookmark.id}
                className="bookmark-item"
                onClick={() => navigate(bookmark.path || `/article/${bookmark.id}`)}
              >
                <div className="bookmark-content">
                  <h3 className="bookmark-title">{bookmark.title}</h3>
                  <p className="bookmark-category">📚 {bookmark.category}</p>
                  <div className="bookmark-progress">
                    <span className="progress-label">📖 Pages read: {bookmark.progress}%</span>
                  </div>
                </div>
                <div className="bookmark-actions">
                  <button
                    className="remove-button"
                    onClick={(e) => removeBookmark(bookmark.id, e)}
                  >
                    Remove
                  </button>
                  <button
                    className="open-button"
                    onClick={() => navigate(bookmark.path || `/article/${bookmark.id}`)}
                  >
                    Open
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
              Browse Handbooks
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
