import React from 'react'
import './MobileNav.css'

const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active": ""}`}
      onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className='logo' src="./assets/images/nike.png"/>

          <ul className="menu-list">
            <li>
              <a className="menu-item">Acceuil</a>
            </li>
            <li>
              <a className="menu-item">Compétences</a>
            </li>
            <li>
              <a className="menu-item">Expérience de travail</a>
            </li>
            <li>
              <a className="menu-item">Contactez-moi</a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
            Engagez-moi
            </button>
          </ul>

        </div>
      </div>
    </>
  )
}

export default MobileNav
