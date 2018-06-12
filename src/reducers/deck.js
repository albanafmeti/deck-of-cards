import * as DeckActionTypes from '../actiontypes/deck';
import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
    deck_id: null,
    cards: []
};

export default function Deck(state = initialState, action) {

    switch (action.type) {

        case DeckActionTypes.STORE_DECK_ID:

            return {
                ...state,
                deck_id: action.deck_id
            };

        case DeckActionTypes.NEW_ROUND:

            return {
                ...state,
                cards: []
            };

        case PlayerActionTypes.THROW_CARD:

            return {
                ...state,
                cards: [
                    ...state.cards,
                    {
                        player_id: action.player_id,
                        card: action.card,
                    }
                ]
            };

        default:
            return state;

    }
}
