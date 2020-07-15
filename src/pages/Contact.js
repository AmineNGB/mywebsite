import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class contact extends Component {

  render() {
    return (

    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Lyon</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0612241326">
                <span className="clickInput" onClick={() => { alert('Numéro de téléphone copié !'); }}>06 12 24 13 26<i class="fas fa-copy copy"></i></span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="amineneghbel@gmail.com">
                <span className="clickInput" onClick={() => { alert('E-mail copié !'); }}>amineneghbel@gmail.com<i class="fas fa-copy copy"></i></span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="https://www.linkedin.com/in/AmineNGB/" target="_blank" rel="noopener noreferrer">
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/AmineNgb" target="_blank" rel="noopener noreferrer">
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/AmineNgb" target="_blank" rel="noopener noreferrer">
              <h4>Twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
    );
  }
}

export default contact;