import React, {Component} from 'react';
import Player from "./Player";
import DeckCard from "./DeckCard";

class Deck extends Component {


    render() {
        return (
            <div className="board">


                <div className="desk rounded-circle">


                    <Player id={1} name="Alban"/>

                    <Player id={2} name="John"/>

                    <Player id={3} name="Loan"/>

                    <Player id={4} name="Eduard"/>

                    <Player id={5} name="Angela"/>


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

export default Deck;