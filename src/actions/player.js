import * as PlayerActionTypes from "../actiontypes/player";
import PlayerApi from "../services/PlayerApiService";
import {commaSeparatedCodes} from '../helpers';
import {newRound} from "./deck";

import NotificationService from '../services/NotificationService';
import {getPlayer, getTotalCards} from "../selectors/playerSelector";

export const drawCards = (deck_id, player_id, count) => {

    return function (dispatch) {

        return PlayerApi.drawCards(deck_id, count).then(response => {

            dispatch(drawCardsSuccess(player_id, response.cards));

        });

    };
};

export const drawCardsSuccess = (player_id, cards) => {
    return {
        type: PlayerActionTypes.DRAW_CARDS_SUCCESS,
        player_id: player_id,
        cards: cards,
    }
};

export const throwCard = (player_id, card) => {
    return {
        type: PlayerActionTypes.THROW_CARD,
        player_id: player_id,
        card: card,
    }
};

export const updateTurn = player_id => {

    return {
        type: PlayerActionTypes.UPDATE_TURN,
        current_player_id: player_id,
    }
};

export const moveCardsToPile = (player_id, cards) => {

    return function (dispatch, getState) {

        const codes = commaSeparatedCodes(cards);
        let pile_name = `player${player_id}`;

        const deck_id = getState().deck.deck_id;

        return PlayerApi.moveCardsToPile(deck_id, pile_name, codes).then(response => {

            console.log('PILE: ', response);

            dispatch(moveCardsToPileSuccess(player_id, cards));

            const player = getPlayer(player_id)(getState());

            if (player.id === 1) {
                NotificationService.success(`You win this round.`);
            } else {
                NotificationService.warning(`${player.name} wins this round.`);
            }

            const totalCards = getTotalCards(getState());

            if (totalCards === 0) {
                dispatch(calculateWinner());
            } else {
                setTimeout(() => {
                    dispatch(newRound());
                }, 3000);
            }
        });

    };
};

export const moveCardsToPileSuccess = (player_id, cards) => {
    return {
        type: PlayerActionTypes.MOVE_CARDS_TO_PILE_SUCCESS,
        player_id: player_id,
        cards: cards,
    }
};

export const calculateWinner = () => {
    return {
        type: PlayerActionTypes.CALCULATE_WINNER,
    }
};