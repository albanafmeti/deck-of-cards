import {createSelector} from 'reselect';

// selector
const players = (state) => state.default.players;

// reselect function
export const getPlayers = createSelector(
    [players],
    (players) => players
);