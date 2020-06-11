import React from 'react';
import Navigation from '../components/Navigation';
import Typical from 'react-typical';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h2>Amine NEGHBEL</h2>
          <Typical
            steps={['Développeur Full Stack JS', 1000]}
            loop={1}
            wrapper="h3"
          />
          <div className="pdf">
            <a href="./media/NEGHBEL Amine CV_Dev.pdf" download target="_blank">Télécharger CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;