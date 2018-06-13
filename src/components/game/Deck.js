import React, {Component} from 'react';
import {connect} from "react-redux";

import Player from "./Player";
import DeckCard from "./DeckCard";

import {getPlayers} from '../../selectors/playerSelector';
import {getDeckCards} from '../../selectors/deckSelector';
import {newRound} from "../../actions/deck";
import {moveCardsToPile} from "../../actions/player";

import {calculateRoundWinner} from '../../helpers';

class Deck extends Component {

    onEndOfRound = () => {

        let winnerCard = calculateRoundWinner(this.props.deck_cards);

        this.props.moveCardsToPile(winnerCard.player_id, this.props.deck_cards);
    };

    render() {

        const {players, deck_cards} = this.props;


        const playerComponents = players.map((player, index) => {
            return <Player key={player.id}
                           player={player}
                           endOfRound={this.onEndOfRound}/>;
        });

        const cardComponents = deck_cards.map((cardInfo, index) => {
            return <DeckCard cardInfo={cardInfo} key={index}/>;
        });

        return (
            <div className="board">


                <div className="desk rounded-circle">


                    {playerComponents}


                    <div className="inner-desk">

                        {cardComponents}

                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        players: getPlayers(state),
        deck_cards: getDeckCards(state),


    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        newRound: () => dispatch(newRound()),
        moveCardsToPile: (pile_name, cards) => dispatch(moveCardsToPile(pile_name, cards))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);