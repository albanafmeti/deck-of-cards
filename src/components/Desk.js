import React, {Component} from 'react';
import Player from "./Player";
import DeskCards from "./DeskCards";

class Desk extends Component {


    render() {
        return (
            <div className="board">


                <div className="desk rounded-circle">


                    <Player id={1} name="Alban"/>

                    <Player id={2} name="John"/>

                    <Player id={3} name="Loan"/>

                    <Player id={4} name="Eduard"/>

                    <Player id={5} name="Angela"/>


                    <DeskCards/>

                </div>


            </div>
        )
            ;
    }
}

export default Desk;