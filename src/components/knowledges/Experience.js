import React from 'react';

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expérience</h3>
        <div className="exp-1">
          <h4>Teacher Assistant</h4>
          <h5>Depuis Mai-2020</h5>
          <p>Actuellement teacher assistant chez Le Wagon Lyon, j'aide les étudiants dans leur apprentissage des bases du code. J'interviens sur Ruby, Rails, JavaScript et HTML&CSS.
          J'assiste aussi les professeurs titulaires sur les projets de fin de formation des étudiants
          </p>
        </div>
        <div className="exp-2">
          <h4>Formation Le Wagon</h4>
          <h5>Janvier 2020 - Mars 2020</h5>
          <p>Bootcamp intensif de 9 semaines formant sur le Développement Web Back-end & Front-end:</p>
          <ul>
            <li> - Programmation en Ruby avec le framework Rails</li>
            <li> - HTML, CSS et JavaScript</li>
            <li> - Architecture Modèle Vue Contrôleur (MVC)</li>
            <li> - Gestion de versions décentralisé (Git, Github)</li>
            <li> - Base de données, SQL et ORM (ActiveRecord)</li>
            <li> - Projet (Gociné.club) </li>
          </ul>
        </div>
      </div>
  );
};

export default Experience;