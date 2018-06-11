import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store';

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

import toastr from 'toastr';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {shuffleCards} from './actions/deck';

toastr.options.progressBar = true;

const store = configureStore();

store.dispatch(shuffleCards());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();