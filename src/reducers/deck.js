import * as DeckActionTypes from '../actiontypes/deck';

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

        default:
            return state;

    }
}
