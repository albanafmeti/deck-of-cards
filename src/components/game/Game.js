import React, {Component} from 'react';
import MyCards from "./MyCards";
import Actions from "./Actions";
import Deck from "./Deck";
import {connect} from 'react-redux';

import {throwCard} from '../../actions/player';
import {updateTurn} from '../../actions/player';

import {getPlayerHandCards, isPlayerTurn} from '../../selectors/playerSelector';

class Game extends Component {

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
