import React from 'react';
import '../../components/navbar.css';
import Navbar from '../../components/navbar';
import './practica.css'; 

export const Practica = () => {
  const practicas = [
    {
      id: '1',
      titulo: 'Laboratorio PS #1',
      descripcion: 'Este software es una agenda web que permite a los usuarios gestionar sus contactos, tareas pendientes y detalles personales de forma segura y eficiente.',
      loAprendido: 'Al desarrollar esta agenda, aprendí sobre la importancia del diseño responsivo para adaptarse a diferentes dispositivos, así como la implementación de un sistema de inicio de sesión seguro utilizando HTML, CSS y JavaScript.',
      link: 'https://cetkinal-my.sharepoint.com/:u:/g/personal/bvalladares-2022112_kinal_edu_gt/EYVWSnnIQf1Itx7geYfyLakBrp9ss_06EyFPuf7qAOtB8A?e=losCqg',
    },
    {
      id: '2',
      titulo: 'Laboratorio PS #2',
      descripcion: 'Una aplicación de backend desarrollada en Node.js, MongoDB y Express para gestionar el control de alumnos en un centro educativo, con roles de maestro y alumno.',
      loAprendido: 'Al desarrollar esta aplicación de control académico, aprendí a utilizar tecnologías como Node.js, MongoDB y Express para construir un backend funcional y seguro.',
      link: 'https://github.com/bvalladares-2022112/ControlAcademico.git',
    },
    {
      id: '2',
      titulo: 'Laboratorio PS #3',
      descripcion: 'Este sistema de gestión de opiniones proporciona a los usuarios una plataforma segura para expresar sus ideas y comentarios.',
      loAprendido: 'He adquirido conocimientos sobre cómo gestionar la creación de cuentas de usuario, procesos de inicio de sesión seguros con opciones de correo electrónico o nombre de usuario y contraseña, así como la gestión de perfiles de usuario y sus respectivas actualizaciones.',
      link: 'https://github.com/bvalladares-2022112/gestionOpiniones.git',
    },
    {
      id: '6',
      titulo: 'Practica BIM 2 - Proyecto grupal',
      descripcion: 'Proyecto grupal Almacenadora donde se pueden guardar tareas, editarlas, eliminarlas y listarlas.',
      loAprendido: 'Al realizar este proyecto grupal aprendi sobre React como hacer interfaces etc.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/bvalladares-2022112_kinal_edu_gt/EYppyDZ8YShMjORTroc1T80BkTAu2KvJsvCTCqKqRgCIeA?e=Cigj1V',
    },
  ];

  return (
    <div>
      <Navbar />
      <h1 className="titulo">Práctica Supervisada</h1>
      <div className="practica-container">
        {practicas.map((practica) => (
          <div key={practica.id} className="practica-item" id={practica.id}>
            <h2>{practica.titulo}</h2>
            <h3>Descripción</h3>
            <p>{practica.descripcion}</p>
            <h3>Lo aprendido</h3>
            <p>{practica.loAprendido}</p>
            <a href={practica.link} target="_blank" rel="noopener noreferrer" className="btn">Link</a>
          </div>
        ))}
      </div>
    </div>
  );
};
