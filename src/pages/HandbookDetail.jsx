import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import { generalKnowledgeChapters, rigHubChapters, articleContent } from '../data/handbookData';
import { incrementArticleView } from '../utils/viewTracker';
import { ChevronRight } from 'lucide-react';
import './HandbookDetail.css';

function HandbookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredChapters, setFilteredChapters] = useState([]);

  const handleChapterClick = async (chapter) => {
    // Track view (global counter)
    await incrementArticleView(id, chapter.id, chapter.title);
    // Navigate to article - use 'wk-rokan' for rig-hub chapters
    const handbookParam = id === 'rig-hub' ? 'wk-rokan' : id;
    navigate(`/chapter/${handbookParam}/${chapter.id}`);
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
    } else if (id === 'rig-hub') {
      return {
        title: 'Rig Hub',
        subtitle: '10 chapters',
        iconImg: '/rig-hub-logo.png',
        chapters: rigHubChapters,
        hasComingSoon: false
      };
    }
    return { 
      title: 'Handbook', 
      subtitle: '', 
      icon: '📚',
      chapters: [] 
    };
  };

  const handbook = getHandbookData();

  // Filter chapters based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredChapters(handbook.chapters);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = handbook.chapters.filter((chapter) => {
      // Search in chapter title
      if (chapter.title.toLowerCase().includes(query)) {
        return true;
      }
      
      // Search in chapter content
      const contentKey = getContentKey(id, chapter.id);
      if (contentKey && articleContent[contentKey]) {
        const content = articleContent[contentKey];
        return (
          content.content?.toLowerCase().includes(query) ||
          content.alert?.toLowerCase().includes(query) ||
          content.glossary?.toLowerCase().includes(query)
        );
      }
      
      return false;
    });
    
    setFilteredChapters(filtered);
  }, [searchQuery, handbook.chapters, id]);

  // Helper function to get content key
  const getContentKey = (handbookId, chapterId) => {
    if (handbookId === 'rig-hub') {
      const map = {
        1: 'objective', 2: 'rig-hub-introduction', 3: 'on-boarding-process',
        4: 'sumatera-operation-area', 5: 'artificial-lift', 6: 'heavy-oil-best-practice',
        7: 'light-oil-best-practice', 8: 'special-operation', 9: 'simops', 10: 'appendix'
      };
      return map[chapterId];
    } else if (handbookId === 'general-knowledge') {
      const map = {
        1: 'abbreviation', 2: 'drilling-safety', 3: 'hsse-rig-operation',
        4: 'rig-unit', 5: 'pre-well-intervention', 6: 'well-intervention-operation',
        7: 'well-problem-handling', 8: 'packer', 9: 'well-head',
        10: 'well-completion', 11: 'artificial-lift-gk', 12: 'glossary'
      };
      return map[chapterId];
    }
    return null;
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

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
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>

            {searchQuery && (
              <p className="search-results-count">
                {filteredChapters.length} chapter{filteredChapters.length !== 1 ? 's' : ''} found
              </p>
            )}

            <div className="chapter-list">
              {filteredChapters.map((chapter) => (
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
            <div 
              className="module-card" 
              style={{ cursor: 'pointer' }}
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = '/handbook/rig-hub';
              }}
            >
              <h4 className="module-title">Rig Hub</h4>
              <p className="module-description">
                10 chapters - Rig Hub Introduction, Artificial Lift, Heavy/Light Oil Best Practices, Special Operation, SIMOPS, Appendix.
              </p>
              <button 
                type="button"
                className="chapter-button"
              >
                Open
              </button>
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
