
import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/">El Diario Del Programador</a>
        </div>
        <div className="navbar-menu">
          <ul>
            <li><Link to='/taller'>Taller</Link></li>
            <li><Link to='/tecnologia'>Tecnologia</Link></li>
            <li><Link to='/practicaSupervisada'>Practica Supervisada</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;