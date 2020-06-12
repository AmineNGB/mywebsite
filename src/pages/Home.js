import React from 'react';
import Navigation from '../components/Navigation';
import Typical from 'react-typical';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <Typical
            steps={['Développeur FullStack JS', 1000]}
            loop={1}
            wrapper="h1"
          />
          <div className="pdf">
            <a href="./media/Amine_Neghbel_Cv.pdf" download target="_blank">Télécharger CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;