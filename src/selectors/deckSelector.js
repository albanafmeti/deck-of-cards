import {createSelector} from 'reselect';

const deck_cards = (state) => state.deck.cards;

export const getDeckCards = createSelector(
    [deck_cards],
    (deck_cards) => deck_cards
);