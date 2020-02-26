import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './css/home.css';
import Root from './client/Root';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();