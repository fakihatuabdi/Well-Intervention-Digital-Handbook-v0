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
          <div className="header-title-section">
            <img src="/phr-logo.png" alt="Logo WK Rokan Operation" className="header-logo" />
            <h1 className="header-title">PT Pertamina Hulu Rokan</h1>
          </div>
        )}
      </div>
      {title && <div className="header-page-title">{title}</div>}
    </header>
  );
}

export default Header;
