import React from 'react';
import '../../components/navbar.css';
import Navbar from '../../components/navbar';
import './taller.css';

export const Taller = () => {
  const talleres = [
    {
      id: '1',
      titulo: 'Laboratorio #1',
      descripcion: 'La tarea implica crear tres páginas HTML: la primera sobre tus intereses, la segunda tu biografía y expectativas educativas, y la tercera consiste en rediseñar la página principal del sitio web del colegio, manteniendo los colores y textos originales pero mejorando el diseño y la usabilidad.',
      loAprendido: 'Aprendí a desarrollar habilidades en diseño web utilizando HTML y CSS al crear tres páginas. Esta tarea me permitió practicar la estructuración de contenido, la aplicación de estilos y mejorar la usabilidad de los sitios web, incluyendo el rediseño de la página del colegio.',
      link: 'https://cetkinal-my.sharepoint.com/:u:/g/personal/bvalladares-2022112_kinal_edu_gt/ETgdzAD2WWRFvmzQS6X9bvQBKb3MS_VvFBt_yOJy5bZl3Q?e=4x0VfX',
    },
    {
      id: '2',
      titulo: 'Laboratorio #2',
      descripcion: 'En este laboratorio, completaremos un proyecto de adopción de mascotas, implementando funciones como SAVE, GET, SEARCH, UPDATE y DELETE para las entidades de animales, con validaciones incluidas. Las funcionalidades pueden ajustarse según las necesidades del proyecto.',
      loAprendido: 'A través de este laboratorio, aprendí a desarrollar un sistema de adopción de mascotas con funciones CRUD y validaciones. Esta experiencia me brindó habilidades prácticas en la manipulación de datos y la adaptabilidad para ajustar las funcionalidades según las necesidades del proyecto.',
      link: 'https://github.com/bvalladares-2022112/AdoptionSystem.git',
    },
    {
      id: '3',
      titulo: 'Revision avances proyecto final de bimestre',
      descripcion: 'El Proyecto Bimestral consiste en una API web en NodeJS para gestionar ventas y productos. Se divide en Administrador y Cliente. El Administrador gestiona productos, categorías, usuarios y facturas.',
      loAprendido: 'A través del Proyecto Bimestral, he aprendido a desarrollar una API web con NodeJS para gestionar ventas y productos de una empresa. He adquirido habilidades en la estructuración de la aplicación en dos secciones, Administrador y Cliente, cada una con funcionalidades específicas.',
      link: 'https://github.com/bvalladares-2022112/ProyectoBimI.git',
    },
    {
      id: '4',
      titulo: 'Laboratorio #3',
      descripcion: 'Gestor de empresas Utiliza Node.js, Express y MongoDB para desarrollar una API que permita a las empresas registrar su información y genere automáticamente un informe en formato Excel',
      loAprendido: 'Al crear este software, se aprendió a utilizar tecnologías como Node.js, Express y MongoDB para construir un backend eficiente. Se adquirió experiencia en seguridad, autenticación y gestión del tiempo.',
      link: 'https://github.com/bvalladares-2022112/gestionesEmpresas.git',
    },
    {
      id: '5',
      titulo: 'Proyecto final Bim #1',
      descripcion: 'Entrega final del proyecto del Bimestre #1',
      loAprendido: 'Al crear este proyecto, se aprendió a desarrollar una API web completa utilizando Node.js, abarcando desde la gestión de productos y categorías hasta la autenticación de usuarios y la administración del carrito de compras.',
      link: 'https://github.com/bvalladares-2022112/ProyectoFinal.git',
    },
    {
      id: '6',
      titulo: 'PMA Laboratorio #2',
      descripcion: 'Entrega de portafolio con varios proyectos',
      loAprendido: 'Al crear este portafolio hemos aprendido mucho sobre la utilizacion de Node.js',
      link: 'https://github.com/bvalladares-2022112/Portafolio.git',
    },
    {
      id: '6',
      titulo: 'Taller BIM 2 - Ejercicios sobre lógica de programación.',
      descripcion: 'Ejercicios sobre logica de programación en hacker ranck.',
      loAprendido: 'Al realizar los ejercicios desarrollo mi logica de programacion y sirven de mucah ayuda.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/bvalladares-2022112_kinal_edu_gt/EbAMQe1p0ftLoQy0jvo7TqsBUyq7DBu3WaYioo4NDzUn7A?e=qUNRAa',
    },
    {
      id: '6',
      titulo: 'Taller BIM 2 - Revisión de avances en proyecto final de bimestre',
      descripcion: 'Proyecto Hotelera Bim 2 30% avanzado incluye BackEnd y FrontEnd',
      loAprendido: 'Al realizar este proyecto estamos aprendido autilizar React y Node.js entre otras cosas más',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/bvalladares-2022112_kinal_edu_gt/EX7rT2suQ3NKlcMGzjIxxWoBc6NRy55Ye-6h_an8JNLNdg?e=qeCbfy',
    },
  ];

  return (
    <div>
      <Navbar />
      <h1 className="titulo">Taller</h1>
      <div className="taller-container">
        {talleres.map((taller) => (
          <div key={taller.id} className="taller-item" id={taller.id}>
            <h2>{taller.titulo}</h2>
            <h3>Descripción</h3>
            <p>{taller.descripcion}</p>
            <h3>Lo aprendido</h3>
            <p>{taller.loAprendido}</p>
            <a href={taller.link} target="_blank" rel="noopener noreferrer" className="btn">Link</a>
          </div>
        ))}
      </div>
    </div>
  );
};
