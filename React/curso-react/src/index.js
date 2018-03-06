import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Media from './playlist/components/media.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Media tipo="video" titulo="titulo en prop" autor="autor en prop" imagen="./images/llamaInpaktada.jpg"/>, document.getElementById('root'));
registerServiceWorker();
