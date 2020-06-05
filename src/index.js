import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';
import StarfieldAnimation from 'react-starfield-animation';

ReactDOM.render(
  <React.StrictMode>
     <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
