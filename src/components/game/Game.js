import React, {Component} from 'react';
import MyCards from "./MyCards";
import Actions from "./Actions";
import Deck from "./Deck";
import {connect} from 'react-redux';

import {throwCard} from '../../actions/player';
import {updateTurn} from '../../actions/player';

import {getPlayerHandCards, isPlayerTurn} from '../../selectors/playerSelector';
import {subscribe} from "redux-subscriber";
import NotificationService from "../../services/NotificationService";

class Game extends Component {

    componentDidMount() {
        subscribe('player.winners', state => {

            const winners = state.player.winners;

            if (winners.length === 1) {

                if (winners[0].id === 1) {
                    NotificationService.success("You are the winner of this game.", "Congratulations!", 100000);
                } else {
                    NotificationService.error("Winner of the game is: " + winners[0].name.toUpperCase(), "GAME OVER!", 100000, false);
                }

            } else if (winners.length > 1) {

                let winnersStr = "";
                winners.forEach((winner) => {
                    winnersStr += (winner.name + ",");
                });

                winnersStr = winnersStr.slice(0, -1);

                NotificationService.success("Winners of the game are: " + winnersStr.toUpperCase(), "WINNERS", 100000, false);

            }

        });
    }

    onThrowCard = (card) => {
        this.props.throwCard(1, card);
        this.props.updateTurn(1);
    };

    render() {
        return (
            <div className="game">

                <Deck/>

                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-12">

                            <MyCards cards={this.props.my_cards}
                                     isTurn={this.props.isTurn}
                                     onThrowCard={this.onThrowCard}/>

                            <Actions/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isTurn: isPlayerTurn(1)(state),
        my_cards: getPlayerHandCards(1)(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        throwCard: (player_id, card) => dispatch(throwCard(player_id, card)),
        updateTurn: (player_id) => dispatch(updateTurn(player_id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
