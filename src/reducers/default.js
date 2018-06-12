const initialState = {
    players: [
        {
            id: 1,
            name: "Alban",
            hand_cards: [],
            pile_cards: [],
            turn: true
        }, {
            id: 2,
            name: "John",
            hand_cards: [],
            pile_cards: [],
            turn: false
        }, {
            id: 3,
            name: "Anna",
            hand_cards: [],
            pile_cards: [],
            turn: false
        }, {
            id: 4,
            name: "Emily",
            hand_cards: [],
            pile_cards: [],
            turn: false
        }, {
            id: 5,
            name: "Mad",
            hand_cards: [],
            pile_cards: [],
            turn: false
        },
    ],
};

const DefaultReducer = (state = initialState, action) => state;

export default DefaultReducer;
