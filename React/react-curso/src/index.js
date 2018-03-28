import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/containers/home';
import registerServiceWorker from './registerServiceWorker';
import data from './api.json';

ReactDOM.render(<Home data={data}/>, document.getElementById('root'));
registerServiceWorker();
