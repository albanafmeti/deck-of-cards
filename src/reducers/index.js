import {combineReducers} from 'redux';
import cardReducer from './card';
import deckReducer from './deck';

const rootReducer = combineReducers({
    deckReducer,
    cardReducer
});

export default rootReducer;