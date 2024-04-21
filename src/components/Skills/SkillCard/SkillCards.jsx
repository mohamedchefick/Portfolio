import React from 'react';
import './SkillCards.css';

const SkillCards = ({ iconUrl, title , isActive , onClick}) => {
  return (
    <div className={`skill-card ${isActive ? "Aactive":""}`}
    onClick={() => onClick()}>
      <img src={iconUrl} alt={title} className="skill-icon" style={{ maxWidth: '100px', maxHeight: '100px' , color:'white'}} />
      <h3 className="skill-title">{title}</h3>
    </div>
  );
};

export default SkillCards;
