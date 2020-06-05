import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h2>Amine NEGHBEL</h2>
          <h3>Développeur Front-end Débutant</h3>
          <div className="pdf">
            <a href="./media/NEGHBEL Amine CV_Dev.pdf" download target="_blank">Télécharger CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;