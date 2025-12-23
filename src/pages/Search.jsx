import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { searchResults } from '../data/handbookData';
import { X, ChevronRight } from 'lucide-react';
import './Search.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = searchResults.filter(
        item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
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
                onClick={() => navigate(`/article/${result.id}`)}
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
