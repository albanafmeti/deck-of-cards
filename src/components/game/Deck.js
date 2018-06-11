import React, {PureComponent} from 'react';
import {connect} from "react-redux";

import Player from "./Player";
import DeckCard from "./DeckCard";

import {getPlayers} from '../../selectors/playerSelector';

class Deck extends PureComponent {


    render() {

        const {players} = this.props;


        const playerComponents = players.map((player, index) => {
            return <Player key={player.id}
                           player={player}/>;
        });

        return (
            <div className="board">


                <div className="desk rounded-circle">


                    {playerComponents}


                    <div className="inner-desk">

                        <DeckCard/>
                        <DeckCard/>
                        <DeckCard/>
                        <DeckCard/>
                        <DeckCard/>

                    </div>

                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        players: getPlayers(state.deckReducer)
    }
};

export default connect(mapStateToProps)(Deck);