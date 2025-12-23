import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { generalKnowledgeChapters, rigHubChapters } from '../data/handbookData';
import { incrementArticleView } from '../utils/viewTracker';
import { ChevronRight } from 'lucide-react';
import './HandbookDetail.css';

function HandbookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChapterClick = (chapter) => {
    // Track view
    incrementArticleView(id, chapter.id, chapter.title);
    // Navigate to article
    const handbookParam = id === 'rig-hub' ? 'wk-rokan' : id;
    navigate(`/chapter/${handbookParam}/${chapter.id}`);
    // Dispatch custom event untuk update Home component
    window.dispatchEvent(new Event('storage'));
  };

  const getHandbookData = () => {
    if (id === 'general-knowledge') {
      return {
        title: 'General Knowledge',
        subtitle: '12 chapters',
        icon: '📚',
        chapters: generalKnowledgeChapters,
        hasComingSoon: true
      };
    } else if (id === 'wk-rokan') {
      return {
        title: 'WK Rokan Operation',
        subtitle: 'Rig Hub + Upcoming Modules',
        iconImg: '/wk-rokan.png',
        chapters: [],
        hasComingSoon: true
      };
    }
    return { 
      title: 'Rig Hub', 
      subtitle: '10 chapters', 
      iconImg: '/rig-hub-logo.png',
      chapters: rigHubChapters 
    };
  };

  const handbook = getHandbookData();

  return (
    <div className="page">
      <Header showBack={true} />
      
      <div className="handbook-detail-header">
        <div className="handbook-detail-icon">
          {handbook.iconImg ? (
            <img src={handbook.iconImg} alt={`${handbook.title} icon`} className="handbook-detail-icon-img" />
          ) : (
            <span style={{ fontSize: '40px' }}>{handbook.icon}</span>
          )}
        </div>
        <h2 className="handbook-detail-title">{handbook.title}</h2>
        <p className="handbook-detail-subtitle">{handbook.subtitle}</p>
      </div>

      <div className="page-content">
        {handbook.chapters.length > 0 ? (
          <>
            <div className="search-box-container">
              <input
                type="text"
                className="search-box"
                placeholder={`Search in ${handbook.title}...`}
              />
            </div>

            <div className="chapter-list">
              {handbook.chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="chapter-item"
                  onClick={() => handleChapterClick(chapter)}
                >
                  <div className="chapter-number">{chapter.id}</div>
                  <div className="chapter-content">
                    <h4 className="chapter-title">{chapter.title}</h4>
                    <p className="chapter-subtitle">{chapter.subtitle}</p>
                  </div>
                  <button className="chapter-button">Open</button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="coming-soon-section">
            <div className="module-card">
              <h4 className="module-title">Rig Hub</h4>
              <p className="module-description">
                10 chapters - Rig Hub Introduction, Artificial Lift, Heavy/Light Oil Best Practices, Special Operation, SIMOPS, Appendix.
              </p>
              <button className="chapter-button" onClick={() => navigate('/handbook/rig-hub')}>Open</button>
            </div>
            <div className="coming-soon-badge">
              <span className="badge-text">Coming Soon!</span>
            </div>
            <p className="coming-soon-text">More Modules</p>
            <p className="coming-soon-subtext">Fresh content is on the way!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HandbookDetail;
