import {combineReducers} from 'redux';
import deckReducer from './deck';
import playerReducer from './player';

const rootReducer = combineReducers({
    player: playerReducer,
    deck: deckReducer,
});

export default rootReducer;