import * as PlayerActionTypes from "../actiontypes/player";
import {getPlayer} from '../selectors/playerSelector';
import * as DeckActionTypes from "../actiontypes/deck";

const initialState = {
    players: [
        {
            id: 1,
            name: "Alban",
            hand_cards: [],
            pile_cards: [],
            last: false
        }, {
            id: 2,
            name: "John",
            hand_cards: [],
            pile_cards: [],
            last: false
        }, {
            id: 3,
            name: "Anna",
            hand_cards: [],
            pile_cards: [],
            last: false
        }, {
            id: 4,
            name: "Emily",
            hand_cards: [],
            pile_cards: [],
            last: false
        }, {
            id: 5,
            name: "Mad",
            hand_cards: [],
            pile_cards: [],
            last: true
        },
    ],

    turnPlayerId: 1,
    totalCards: 50
};

export default function Player(state = initialState, action) {

    let players = state.players;

    switch (action.type) {

        case PlayerActionTypes.DRAW_CARDS_SUCCESS:

            players = state.players.map((player, index) => {

                if (player.id === action.player_id) {
                    return {
                        ...player,
                        hand_cards: action.cards
                    }
                }

                return player;
            });

            return {
                ...state,
                players: [
                    ...players
                ]
            };


        case PlayerActionTypes.THROW_CARD:

            players = state.players.map((player, index) => {

                if (player.id === action.player_id) {

                    let hand_cards = player.hand_cards.filter(card => {
                        return card.code !== action.card.code;
                    });

                    return {
                        ...player,
                        hand_cards: [...hand_cards]
                    }
                }

                return player;
            });

            return {
                ...state,
                players: [
                    ...players
                ],
                totalCards: state.totalCards - 1
            };


        case PlayerActionTypes.UPDATE_TURN:

            let player = getPlayer(action.current_player_id)(state);

            let next_player_id = null;

            if (player.last) {
                next_player_id = 1;
            } else {
                next_player_id = action.current_player_id + 1;
            }

            return {
                ...state,
                turnPlayerId: next_player_id
            };


        case DeckActionTypes.NEW_ROUND:

            return {
                ...state,
                turnPlayerId: 1
            };


        default:
            return state;

    }
}
