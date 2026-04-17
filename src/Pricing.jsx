import React from 'react';
import './Pricing.css';
import claudeLogo from './images/claude_code.png';
import codexLogo from './images/codex.png';
import qwenLogo from './images/qwen_code.png';



const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2>Our Plans</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <div className="pricing-card-image-placeholder">
            <img src={claudeLogo} alt="Claude Logo" />
          </div>
          <h3>Claude Code Plan</h3>
          <p className="price">$200/month</p>
          <button className="btn pricing-btn">Select Plan</button>
        </div>
        <div className="pricing-card">
          <div className="pricing-card-image-placeholder">
            <img src={codexLogo} alt="Codex Logo" />
          </div>
          <h3>The Codex Plan</h3>
          <p className="price">$150/month</p>
          <button className="btn pricing-btn">Select Plan</button>
        </div>
        <div className="pricing-card">
          <div className="pricing-card-image-placeholder">
            <img src={qwenLogo} alt="Qwen Logo" />
          </div>
          <h3>Qwen Code Plan</h3>
          <p className="price">$15/month</p>
          <button className="btn pricing-btn">Select Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;