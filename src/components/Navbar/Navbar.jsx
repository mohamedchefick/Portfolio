import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {

  const [openMenu , setopenMenu]= useState(false);
  const  toggleMenu= ()=>{
    setopenMenu(!openMenu)
  };
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

      <div className="nav-wrapper">
        <div className="nav-content">
          <img src="./assets/images/nike.png" alt="" className="logo" />
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
          <button className="menu-btn" onClick={toggleMenu  }>
            <span className="material-icons-outlined" style={{ fontSize: "10px" }}>
              {openMenu ? "close" : "Menu"}
              <img src="./assets/images/menu-regular-60" alt="" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;