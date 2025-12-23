import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { getArticleContent, defaultArticleContent } from '../data/handbookData';
import { FileText, BookmarkPlus } from 'lucide-react';
import { addBookmark, removeBookmark, isBookmarked as isBookmarkedUtil } from '../utils/bookmarks';
import './ArticleDetail.css';

function ArticleDetail() {
  const { id, handbookId, chapterId } = useParams();
  const navigate = useNavigate();
  
  // Get the appropriate content based on handbook and chapter
  const articleContent = handbookId && chapterId 
    ? getArticleContent(parseInt(chapterId), handbookId)
    : defaultArticleContent;
  
  const [checklist, setChecklist] = useState(articleContent.checklist);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // Scroll to top when component mounts or chapter changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [handbookId, chapterId]);
  
  // Update checklist when content changes
  useEffect(() => {
    setChecklist(articleContent.checklist);
  }, [handbookId, chapterId]);
  

  useEffect(() => {
    const bookmarkId = id || `${handbookId}-${chapterId}`;
    setIsBookmarked(isBookmarkedUtil(bookmarkId));
  }, [id, handbookId, chapterId]);

  const toggleCheckItem = (itemId) => {
    setChecklist(checklist.map(item => 
      item.id === itemId ? { ...item, checked: !item.checked } : item
    ));
  };

  const toggleBookmark = () => {
      const bookmarkId = id || `${handbookId}-${chapterId}`;
      const bookmarkPath = id ? `/article/${id}` : `/chapter/${handbookId}/${chapterId}`;
    
    const bookmark = {
      id: bookmarkId,
      title: articleContent.title,
      category: handbookId === 'wk-rokan' ? 'Rig Hub' : 'Article',
      path: bookmarkPath,
      progress: articleContent.progress || 0,
    };
    if (isBookmarked) {
      removeBookmark(bookmarkId);
      setIsBookmarked(false);
    } else {
      addBookmark(bookmark);
      setIsBookmarked(true);
    }
  };

  return (
    <div className="page">
      <Header showBack={true} />
      
      <div className="article-header">
        <h2 className="article-header-title">{articleContent.title}</h2>
        <div className="article-meta-info">
          <span className="meta-item">Estimated read: {articleContent.readTime}</span>
          <span className="meta-divider">·</span>
          <span className="meta-item">Progress: {articleContent.progress}%</span>
        </div>
      </div>

      <div className="page-content article-content">
        {/* Content */}
        <div className="content-section">
          <p className="content-text">{articleContent.content}</p>
        </div>

        {/* Safety Alert */}
        <div className="alert-box">
          <div className="alert-header">⚠️ Safety Alert:</div>
          <p className="alert-text">{articleContent.alert}</p>
        </div>

        {/* Pre-Operational Checklist */}
        <div className="checklist-section">
          <h3 className="section-heading">Pre-Operational Checklist</h3>
          <div className="checklist">
            {checklist.map((item) => (
              <div key={item.id} className="checklist-item">
                <input
                  type="checkbox"
                  id={`check-${item.id}`}
                  checked={item.checked}
                  onChange={() => toggleCheckItem(item.id)}
                  className="checkbox-input"
                />
                <label htmlFor={`check-${item.id}`} className="checkbox-label">
                  {item.text}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Attachments */}
        <div className="attachments-section">
          <h3 className="section-heading">Attachments</h3>
          <div className="attachments">
            {articleContent.attachments.map((file, index) => (
              <div key={index} className="attachment-item">
                <FileText size={20} color="#1565C0" />
                <span className="attachment-name">{file.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Glossary */}
        <div className="glossary-section">
          <h3 className="section-heading">Glossary</h3>
          <p className="glossary-text">{articleContent.glossary}</p>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="action-button primary">Start Quiz</button>
          <button 
            className={`action-button secondary ${isBookmarked ? 'bookmarked' : ''}`}
            onClick={toggleBookmark}
          >
            <BookmarkPlus size={18} />
            {isBookmarked ? 'Bookmarked' : 'Bookmark'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
