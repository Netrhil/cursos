import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Playlist from './playlist/components/playlist'
import registerServiceWorker from './registerServiceWorker';
import data from './api.json';

ReactDOM.render(<Playlist data={data}/>, document.getElementById('root'));
registerServiceWorker();
