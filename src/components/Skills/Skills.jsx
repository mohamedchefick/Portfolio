import React from 'react';
import './Skills.css';
import SkillCards from './SkillCard/SkillCards';
import { SKILLS } from '../../utils/data';
import { useState } from 'react';
import SkillinfoCard from './SkillinfoCard/SkillinfoCard';

const Skills = () => {

  const[selectedSkill , setSelectedSkill]= useState(SKILLS[0])

    const handleSelectSkill =(data) =>{
        setSelectedSkill(data);
    };

  return (
    <section className='skills-container'>
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCards 
              key={item.title} 
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillinfoCard
          heading={selectedSkill.title}
          skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section> 
  );
};

export default Skills;
