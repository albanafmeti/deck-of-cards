import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {subscribe} from 'redux-subscriber';
import {connect} from 'react-redux';

import * as PlayerActions from '../../actions/player';
import {throwCard, updateTurn} from "../../actions/player";
import {getPlayer} from '../../selectors/playerSelector';

class Player extends Component {

    static propTypes = {
        player: PropTypes.object.isRequired,
        endOfRound: PropTypes.func.isRequired,
    };

    componentDidMount() {
        subscribe('deck.deck_id', state => {
            this.props.drawCards(state.deck.deck_id, this.props.player.id, 10);
        });

        subscribe('player.turnPlayerId', state => {

            if (state.player.turnPlayerId === this.props.player.id
                && state.player.turnPlayerId !== 1) {

                setTimeout(() => {

                    this.throwCard();

                    const player = getPlayer(state.player.turnPlayerId)(state);

                    if (player.last) {

                        this.props.endOfRound();

                    } else {

                        this.props.updateTurn(this.props.player.id);
                    }

                }, 2000);
            }

        });
    }

    throwCard = () => {

        const {player} = this.props;
        let length = player.hand_cards.length;

        if (length) {
            let randomIndex = Math.floor(Math.random() * length);

            let card = player.hand_cards[randomIndex];

            this.props.throwCard(player.id, card);
        }

    };

    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.player.hand_cards.length !== nextProps.player.hand_cards.length) ||
            (this.props.turnPlayerId !== nextProps.turnPlayerId);
    }

    render() {
        const {player, turnPlayerId} = this.props;

        const hand_cards = player.hand_cards.map((card, index) => {
            return <img src="/images/card-back.jpg" alt="Card Back" key={index}/>;
        });

        const turnCss = player.id === turnPlayerId ? 'your-turn' : '';

        return (
            <div className={`player-zone pz-${player.id} ${turnCss}`}>

                <p className="text-center player-name"><strong>{player.name}</strong> ( {player.pile_cards.length} )</p>

                <img src="/images/user.svg" alt="User"/>

                <div className="hidden-cards">

                    {hand_cards}

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        turnPlayerId: state.player.turnPlayerId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        drawCards: (deck_id, player_id, count) => dispatch(PlayerActions.drawCards(deck_id, player_id, count)),
        throwCard: (player_id, card) => dispatch(throwCard(player_id, card)),
        updateTurn: (player_id) => dispatch(updateTurn(player_id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);