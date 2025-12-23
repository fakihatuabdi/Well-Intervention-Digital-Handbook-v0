import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { generalKnowledgeChapters, rigHubChapters, articleContent } from '../data/handbookData';
import { X, ChevronRight } from 'lucide-react';
import './Search.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const queryLower = query.toLowerCase();
      const searchResults = [];

      // Search in General Knowledge chapters
      generalKnowledgeChapters.forEach((chapter) => {
        const contentKey = getContentKey('general-knowledge', chapter.id);
        if (contentKey && articleContent[contentKey]) {
          const content = articleContent[contentKey];
          const matches = 
            chapter.title.toLowerCase().includes(queryLower) ||
            chapter.subtitle?.toLowerCase().includes(queryLower) ||
            content.content?.toLowerCase().includes(queryLower) ||
            content.alert?.toLowerCase().includes(queryLower) ||
            content.glossary?.toLowerCase().includes(queryLower);
          
          if (matches) {
            searchResults.push({
              id: `general-knowledge-${chapter.id}`,
              handbookId: 'general-knowledge',
              chapterId: chapter.id,
              title: chapter.title,
              subtitle: chapter.subtitle || 'General Knowledge',
              category: 'General Knowledge',
              icon: '📚',
              path: `/chapter/general-knowledge/${chapter.id}`
            });
          }
        }
      });

      // Search in Rig Hub chapters
      rigHubChapters.forEach((chapter) => {
        const contentKey = getContentKey('rig-hub', chapter.id);
        if (contentKey && articleContent[contentKey]) {
          const content = articleContent[contentKey];
          const matches = 
            chapter.title.toLowerCase().includes(queryLower) ||
            chapter.subtitle?.toLowerCase().includes(queryLower) ||
            content.content?.toLowerCase().includes(queryLower) ||
            content.alert?.toLowerCase().includes(queryLower) ||
            content.glossary?.toLowerCase().includes(queryLower);
          
          if (matches) {
            searchResults.push({
              id: `rig-hub-${chapter.id}`,
              handbookId: 'wk-rokan',
              chapterId: chapter.id,
              title: chapter.title,
              subtitle: chapter.subtitle || 'Rig Hub Operations',
              category: 'Rig Hub',
              icon: '🛢️',
              path: `/chapter/wk-rokan/${chapter.id}`
            });
          }
        }
      });

      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

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

  const clearSearch = () => {
    setSearchQuery('');
    setResults([]);
  };

  return (
    <div className="page">
      <Header title="Search Handbook" showBack={false} />
      
      <div className="page-content">
        <div className="search-section">
          <p className="search-intro">Search across all chapters and sections</p>
          
          <div className="search-input-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search topics, procedures, or equipment"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-button" onClick={clearSearch}>
                <X size={18} />
              </button>
            )}
          </div>

          {results.length > 0 && (
            <p className="results-count">{results.length} results found</p>
          )}
        </div>

        {results.length > 0 && (
          <div className="search-results">
            {results.map((result) => (
              <div
                key={result.id}
                className="search-result-item"
                onClick={() => navigate(result.path)}
              >
                <div className="result-icon">{result.icon}</div>
                <div className="result-content">
                  <h4 className="result-title">{result.title}</h4>
                  <p className="result-subtitle">{result.subtitle}</p>
                  <span className="result-category">📚 {result.category}</span>
                </div>
                <ChevronRight size={20} color="#9E9E9E" />
              </div>
            ))}
          </div>
        )}

        {searchQuery && results.length === 0 && (
          <div className="no-results">
            <p className="no-results-text">No results found for "{searchQuery}"</p>
            <p className="no-results-hint">Try different keywords or browse handbooks</p>
          </div>
        )}

        {!searchQuery && (
          <div className="search-empty-state">
            <div className="empty-icon">🔍</div>
            <p className="empty-text">Start typing to search</p>
            <p className="empty-hint">Discover topics, procedures, and equipment insights</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
