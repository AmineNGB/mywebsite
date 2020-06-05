import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  return(
    <div className="sidebar"> 

      <div className="id">
        <div className="idContent">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQE-yOt0XIGJUA/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=JSuq9FXzXvu8jpCPT1EtO-a7ziLawfz5u0iA6qBxdlk" alt="profil-pic"/>
          <h3>Amine NEGHBEL</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/knowledges" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </li>
          <li>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </li>
          <li>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
          </li>
        </ul>
        <div className="signature">
          <a href="https://www.youtube.com/channel/UCHGLV13U7YRbjrKpqfbtyYg/videos" target="_blank" rel="noopener noreferrer">
            <p>Développé par Amine NEGHBEL © 2020</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navigation;