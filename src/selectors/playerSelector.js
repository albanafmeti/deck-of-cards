import {createSelector} from 'reselect';

// selector
const players = (state) => state.players;

// reselect function
export const getPlayers = createSelector(
    [players],
    (players) => players
);