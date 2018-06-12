import React, {PureComponent} from 'react';
import {connect} from "react-redux";

import Player from "./Player";
import DeckCard from "./DeckCard";

import {getPlayers} from '../../selectors/playerSelector';
import {getDeckCards} from '../../selectors/deckSelector';

class Deck extends PureComponent {

    render() {

        const {players, deck_cards} = this.props;


        const playerComponents = players.map((player, index) => {
            return <Player key={player.id}
                           player={player}/>;
        });

        const cardComponents = deck_cards.map((deck, index) => {
            return <DeckCard/>;
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

export default connect(mapStateToProps)(Deck);