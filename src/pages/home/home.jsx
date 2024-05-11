import React from 'react';
import Navbar from '../../components/navbar';
import './home.css'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Bienvenido</h1>
      <div className="section-links">
        <Link to='/taller'>
          <img src="https://kinal.academy/pluginfile.php/404490/course/overviewfiles/Taller%20III%20bueno.gif" alt="Sección 1" />
        </Link>
        <Link to='/practicaSupervisada'>
          <img src="https://kinal.academy/pluginfile.php/404491/course/overviewfiles/Pr%C3%A1ctica%20Supervisada%20AM.gif" alt="Sección 2" />
        </Link>
        <Link to='/tecnologia'>
          <img src="https://kinal.academy/pluginfile.php/404489/course/overviewfiles/Tecnolog%C3%ADa%20IIIAM.gif" alt="Sección 3" />
        </Link>
      </div>
    </div>
  );
};
