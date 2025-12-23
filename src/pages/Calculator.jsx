import React from 'react';
import Header from '../components/Header';
import { Rocket } from 'lucide-react';
import './Calculator.css';

function Calculator() {
  const calculators = [
    {
      id: 1,
      title: 'Initial Killing & Pumping',
      icon: '⚙️',
      description: 'Calculate kill weight and pumping rates'
    },
    {
      id: 2,
      title: 'Pump Stuck Suspension',
      icon: '🔧',
      description: 'Suspension calculations for stuck pumps'
    },
    {
      id: 3,
      title: 'Other Operation Calculations',
      icon: '📐',
      description: 'Additional well intervention calculations'
    }
  ];

  return (
    <div className="page">
      <Header showBack={false} />
      
      <div className="calculator-hero">
        <div className="calculator-icon-large">
          <img src="/calculator-logo.png" alt="Calculator" className="calculator-logo" />
        </div>
        <h2 className="calculator-hero-title">Calculation Tools</h2>
        <p className="calculator-hero-subtitle">Advanced Well Intervention Calculators</p>
      </div>

      <div className="page-content">
        <div className="calculator-grid">
          {calculators.map((calc) => (
            <div key={calc.id} className="calculator-card">
              <div className="calculator-card-icon">
                <span style={{ fontSize: '32px' }}>{calc.icon}</span>
              </div>
              <h3 className="calculator-card-title">{calc.title}</h3>
              <p className="calculator-card-description">{calc.description}</p>
            </div>
          ))}
        </div>

        <div className="coming-really-soon">
          <div className="coming-badge">
            <Rocket size={16} />
            <span>Coming really soon!</span>
          </div>
          <p className="coming-message">
            We're developing comprehensive calculation tools to support smooth well intervention operations. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
