import {createSelector} from 'reselect';

// selector
const players = (state) => state.player ? state.player.players : state.players;
const turnPlayerId = (state) => state.player ? state.player.turnPlayerId : state.turnPlayerId;

// reselect function
export const getPlayers = createSelector(
    [players],
    (players) => players
);

export const getPlayer = (id) => createSelector(
    [players],
    (players) => {
        return players.find((player) => player.id === id);
    }
);

export const getPlayerHandCards = (player_id) => createSelector(
    [players],
    (players) => {
        const player = players.find((player) => player.id === player_id);
        return player.hand_cards;
    }
);

export const isPlayerTurn = (player_id) => createSelector(
    [players, turnPlayerId],
    (players, turnPlayerId) => {
        const player = players.find((player) => player.id === player_id);
        return player.id === turnPlayerId;
    }
);