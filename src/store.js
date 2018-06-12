import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import initSubscriber from 'redux-subscriber';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './reducers';

export default function configureStore() {

    const store = createStore(reducers,
        composeWithDevTools(
            applyMiddleware(thunk),
        ));

    initSubscriber(store);

    // enable hot reload of reducer-files
    if (module.hot) {
        module.hot.accept('./reducers/', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        })
    }

    return store;
}