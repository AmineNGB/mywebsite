import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Amine NEGHBEL</h1>
          <h2>Développeur Front-end Débutant</h2>
          <div className="pdf">
            <a href="./media/NEGHBEL Amine CV_Dev.pdf" download target="_blank">Télécharger CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;