import React from 'react';

const ProgressBar = (props) => {

  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="levels">
        <span>Niveau d'expériences</span>
        <span>débutant</span>
        <span>intermédiaire</span>
      </div>
      
      <div>
        {
          props.languages.map((item) => {
            let xpLevels = 2;
            let progressBar = item.xp / xpLevels * 100 + '%';

              return (
                <div key={item.id} className="languagesList">
                  <li>{item.value}</li>
                  <div className="progressBar" style={{width:progressBar}}></div>
                </div>
              )
          })
        }
      </div>
    </div>
  );
};

export default ProgressBar;