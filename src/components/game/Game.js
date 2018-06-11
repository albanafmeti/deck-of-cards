import React, {Component} from 'react';
import MyCards from "./MyCards";
import Actions from "./Actions";
import Deck from "./Deck";

class Game extends Component {
    render() {
        return (
            <div className="game">

                <Deck/>

                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-12">

                            <MyCards/>

                            <Actions/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;
