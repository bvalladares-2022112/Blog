import React from 'react';
import '../../components/navbar.css';
import Navbar from '../../components/navbar';
import './tecnologia.css'

export const Tecnologia = () => {
  const tecnologias = [
    {
      id: '1',
      titulo: 'Infografía',
      descripcion: 'infografía sobre Desarrollo web y procesadores con los siguientes temas: HTML5, CSS3, FlexBox, Bootstrap y los preprocesadores LESS, SASS, PUG y JADE.',
      loAprendido: 'Durante la creación de la infografía sobre Desarrollo web y procesadores, se adquirieron conocimientos profundos sobre las tecnologías fundamentales para la construcción de sitios web modernos.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/bvalladares-2022112_kinal_edu_gt/EYq4nLKiZTVGrRwRQArlzSkBZjXhGEbUOB2HLMxM9p9OeA?e=RGHAm0',
    },
    {
      id: '2',
      titulo: 'Mapa Conceptual',
      descripcion: 'Creacion de un mapa conceptual sobre tecnologías web teniendo en cuenta los siguientes temas:Javascript, AJAX, MVVM, MVC, DenoJS, MeteorJS, NextJS, GraphQL, BackboneJs',
      loAprendido: 'Al crear el mapa conceptual sobre tecnologías web, profundicé en herramientas como Javascript, AJAX, MVVM, MVC, DenoJS, MeteorJS, NextJS, GraphQL y BackboneJs, comprendiendo mejor su interrelación y aplicaciones en el desarrollo web.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/bvalladares-2022112_kinal_edu_gt/ES7H-YmXvetJj1O3EQypyysBfZIoRqmo9ilCR7PCIFrXww?e=MrKrRI',
    },
    {
      id: '3',
      titulo: 'Mapa Mental',
      descripcion: 'Descripción de la tecnologRealizar un mapa mental sobre el Desarrollo web teniendo en cuenta los siguiente temas:Hosting, Dominio, Cliente-Servidor, Web semántica, WebM, Canvas, W3Cía 2...',
      loAprendido: 'Esta actividad me ayudó a visualizar cómo estos elementos se relacionan y contribuyen al desarrollo web, proporcionándome una comprensión más clara y estructurada del proceso.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/bvalladares-2022112_kinal_edu_gt/ERUzdP91qxpAj_3t_dQh1tYBOveH8CNrGuiwYg4-1Hg0Ew?e=GGfsSD',
    },
    {
      id: '4',
      titulo: 'PMA INFOGRAFÍA',
      descripcion: 'Infografía sobre APIS y creacion de APIS',
      loAprendido: 'Al diseñar la infografía sobre APIs y explorar la creación de APIs, profundicé en el conocimiento sobre la importancia y el funcionamiento de las Interfaces de Programación de Aplicaciones (APIs). ',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/bvalladares-2022112_kinal_edu_gt/ET7SztS_7VZCgvPAbWIHDK0BsppkkMVgtt0NvBWrwCIP8g?e=L2XMIq',
    },
    {
      id: '5',
      titulo: 'PMA Mapa Mental',
      descripcion: 'Investigación formal sobre: Desarrollo Web FrontEnd, Angular, Svelt , React',
      loAprendido: 'Al realizar la investigación formal sobre Desarrollo Web FrontEnd y explorar tecnologías como Angular, Svelte y React, amplié mi comprensión sobre las herramientas fundamentales en la creación de interfaces de usuario dinámicas y eficientes.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/bvalladares-2022112_kinal_edu_gt/EZ_S4XqqHBVPpwEeCAgm8IcBGB1k6sAG0p21AJXUoZ044g?e=2ivhbI',
    },
    {
      id: '6',
      titulo: 'Tecnología BIM 2 - Infografía: Beneficios React',
      descripcion: 'ReactJS ofrece beneficios significativos para el desarrollo web moderno, incluida su capacidad para crear interfaces de usuario modulares y reutilizables mediante su enfoque de componentización. ',
      loAprendido: 'Al investigar y escribir sobre los beneficios de utilizar ReactJS, he reforzado mi comprensión sobre las características clave de esta biblioteca de JavaScript.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/bvalladares-2022112_kinal_edu_gt/EQFv-B97oX1OqYpbPqnMqzUBCrX97hWqOzyTup13R8fNxQ?e=HgymaE',
    },
    {
      id: '6',
      titulo: 'Tecnología BIM 2 - Propuesta de proyecto',
      descripcion: 'Propuesta de proyecto FindYourPet modelos, esquemas, gastos etc.',
      loAprendido: 'Al realizar la propuesta e aprendido como crear propuestas de proyetos y que es lo necesario para hacer una',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/bvalladares-2022112_kinal_edu_gt/EfyKu0vEhH5NtZYeT8ZTFPEBse6cR0N9YoToU0wK_pchpw?e=k3Z0uw',
    },
    {
      id: '6',
      titulo: 'Tecnología BIM 2 - Investigación',
      descripcion: 'La tarea consiste en investigar y comprender diferentes estilos de codificación (CodingStyle), como las convenciones de código, el Angular JS Style Guide y Clean Code JavaScript.',
      loAprendido: 'Al realizar esta tarea, aprendí sobre la importancia de los estilos de codificación (CodingStyle) en el desarrollo de software.',
      link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/bvalladares-2022112_kinal_edu_gt/EcVMRgECO8dGngD73aSvXssB6e_9Zm8fHLdKSqAYqRO0bQ?e=yyFyzf',
    },
  ];

  return (
    <div>
      <Navbar />
      <h1 className="titulo">Tecnología</h1>
      <div className="tecnologia-container">
        {tecnologias.map((tecnologia) => (
          <div key={tecnologia.id} className="tecnologia-item" id={tecnologia.id}>
            <h2>{tecnologia.titulo}</h2>
            <h3>Descripción</h3>
            <p>{tecnologia.descripcion}</p>
            <h3>Lo aprendido</h3>
            <p>{tecnologia.loAprendido}</p>
            <a href={tecnologia.link} target="_blank" rel="noopener noreferrer" className="btn">Link</a>
          </div>
        ))}
      </div>
    </div>
  );
};
