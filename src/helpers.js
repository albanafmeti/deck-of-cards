export const cardValue = (value) => {
    switch (value) {
        case "JACK":
            return 11;
        case "QUEEN":
            return 12;
        case "KING":
            return 13;
        case "ACE":
            return 14;
        default:
            return parseInt(value, 10);
    }
};

export const calculateRoundWinner = (cardList) => {

    let cards = [...cardList];

    let greaterCard = null;

    for (let i = 0; i < cards.length - 1; i++) {

        let c1Value = cardValue(cards[i].card.value);
        let c2Value = cardValue(cards[i + 1].card.value);

        if (c1Value > c2Value) {
            cards[i + 1] = cards[i];
        }

        greaterCard = cards[i + 1];
    }

    console.log("ROUND WINNER: ", greaterCard.card.value);

    return greaterCard;
};

export const commaSeparatedCodes = (cards) => {
    let codesString = "";

    for (let cardInfo of cards) {

        codesString += (cardInfo.card.code + ',');

    }

    return codesString.slice(0, -1);
};

export const calculateMaxPileValue = (players) => {

    const values = players.map(player => player.pile_cards.length);
    return Math.max(...values);
};