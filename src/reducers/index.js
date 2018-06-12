import {combineReducers} from 'redux';
import deckReducer from './deck';
import defaultReducer from './default';

const rootReducer = combineReducers({
    default: defaultReducer,
    deck: deckReducer,
});

export default rootReducer;