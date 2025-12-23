import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { handbooks } from '../data/handbookData';
import './Handbook.css';

function Handbook() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <Header title="Handbook" showBack={false} />
      
      <div className="page-content">
        <div className="handbook-intro">
          <p className="intro-text">Choose a handbook section to view chapters and materials.</p>
        </div>

        <div className="handbook-list">
          {handbooks.map((handbook) => (
            <div
              key={handbook.id}
              className="handbook-list-item"
              onClick={() => navigate(`/handbook/${handbook.id}`)}
            >
              <div className="handbook-list-icon" style={{ background: `${handbook.color}20` }}>
                {handbook.iconImg ? (
                  <img
                    src={handbook.iconImg}
                    alt={`${handbook.title} icon`}
                    className="handbook-list-icon-img"
                  />
                ) : (
                  <span style={{ fontSize: '28px' }}>{handbook.icon}</span>
                )}
              </div>
              <div className="handbook-list-content">
                <h3 className="handbook-list-title">{handbook.title}</h3>
                <p className="handbook-list-description">{handbook.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Handbook;
