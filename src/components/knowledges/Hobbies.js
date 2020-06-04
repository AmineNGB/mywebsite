import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Centre d'intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-fist-raised"></i>
          <span>Taekwondo</span>
        </li>
        <li className="hobby">
          <i className="fas fa-hiking"></i>
          <span>Randonnées</span>
        </li>
        <li className="hobby">
          <i className="fas fa-camera"></i>
          <span>Photographie</span>
        </li>
        <li className="hobby">
          <i className="fab fa-song"></i>
          <span>Piano</span>
        </li>
        
      </ul>
    </div>
  );
};

export default Hobbies;