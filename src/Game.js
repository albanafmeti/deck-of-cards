import React, {Component} from 'react';
import MyCards from "./components/MyCards";
import Actions from "./components/Actions";
import Desk from "./components/Desk";

class Game extends Component {
    render() {
        return (
            <div className="game">

                <Desk/>

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
