import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Header.css';

function Header({ title, showBack = false }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <header className="app-header">
      <div className="header-content">
        {showBack && (
          <button className="back-button" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        )}
        {!showBack && (
          <div className="header-branding">
            <div className="header-main-section">
              <img src="/app-logo.png" alt="Well Intervention Digital Handbook" className="header-main-logo" />
              <div className="header-main-content">
                <h1 className="header-main-title">Well Intervention</h1>
                <p className="header-main-subtitle">Digital Handbook</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {title && <div className="header-page-title">{title}</div>}
    </header>
  );
}

export default Header;
