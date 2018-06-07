import React from 'react';
import ReactDOM from 'react-dom';

// import {Provider} from 'react-redux';
// import {createStore} from 'redux';

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

import toastr from 'toastr';

import Game from './Game';
import registerServiceWorker from './registerServiceWorker';

toastr.options.progressBar = true;

ReactDOM.render(<Game/>, document.getElementById('root'));
registerServiceWorker();