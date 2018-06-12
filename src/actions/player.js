import * as PlayerActionTypes from "../actiontypes/player";
import PlayerApi from "../services/PlayerApiService";

export const drawCards = (deck_id, player_id, count) => {

    return function (dispatch, getState) {

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