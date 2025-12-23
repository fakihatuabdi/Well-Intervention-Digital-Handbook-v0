import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { handbooks } from '../data/handbookData';
import { getTopArticles } from '../utils/viewTracker';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    // Update top articles setiap kali component dimount atau ketika ada perubahan
    const updateTopArticles = () => {
      const articles = getTopArticles(5);
      setTopArticles(articles);
    };
    
    updateTopArticles();
    
    // Listen untuk storage changes dari tab lain
    window.addEventListener('storage', updateTopArticles);
    
    return () => window.removeEventListener('storage', updateTopArticles);
  }, []);

  return (
    <div className="page">
      <Header />
      
      <div className="page-content">
        {/* Hero Banner */}
        <div className="hero-banner">
          <div className="hero-content">
            <div className="hero-badge">DIGITAL HANDBOOK</div>
            <h2 className="hero-title">Well Intervention</h2>
            <h3 className="hero-subtitle">Engineering & Operation Best Practice</h3>
            <p className="hero-description">A Comprehensive Guide for Oil & Gas Well Operations</p>
          </div>
        </div>

        {/* Handbook Section */}
        <section className="section">
          <h3 className="section-title">Handbook</h3>
          <div className="handbook-grid">
            {handbooks.map((handbook) => (
              <div
                key={handbook.id}
                className="handbook-card"
                onClick={() => navigate(`/handbook/${handbook.id}`)}
              >
                <div className="handbook-icon" style={{ background: `${handbook.color}20` }}>
                  {handbook.iconImg ? (
                    <img
                      src={handbook.iconImg}
                      alt={`${handbook.title} icon`}
                      className="handbook-icon-img"
                    />
                  ) : (
                    <span style={{ fontSize: '32px' }}>{handbook.icon}</span>
                  )}
                </div>
                <h4 className="handbook-title">{handbook.title}</h4>
                <p className="handbook-description">{handbook.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="section">
          <h3 className="section-title">Case Studies / Lessons Learned</h3>
          <div className="case-study-card">
            <div className="case-study-icon">📝</div>
            <h4 className="case-study-title">Real-world insights coming soon!</h4>
            <p className="case-study-text">We're compiling field experiences and best practices</p>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="section">
          <h3 className="section-title">Popular Handbook Articles</h3>
          {topArticles.length > 0 ? (
            <div className="article-grid">
              {topArticles.map((article, index) => (
                <div 
                  key={`${article.handbookId}-${article.chapterId}`}
                  className="article-card" 
                  onClick={() => navigate(`/handbook/${article.handbookId}`)}
                >
                  <div className="article-number">{index + 1}</div>
                  <div className="article-content">
                    <h4 className="article-title">{article.title}</h4>
                    <p className="article-meta">📖 {article.views} reads · {article.handbookId === 'rig-hub' ? 'Rig Hub' : 'General Knowledge'}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p className="empty-text">No articles read yet. Start exploring the handbook to see what’s popular!</p>
            </div>
          )}
        </section>

        {/* Updates */}
        <section className="section">
          <h3 className="section-title">Updates & Notices</h3>
          <div className="update-card">
            <p className="update-text">
              <strong>SIMOPS plan updated</strong> — check the Appendix PDF.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
