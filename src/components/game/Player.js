import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Player extends Component {

    static propTypes = {
        player: PropTypes.object.isRequired,
    };

    render() {
        const {player} = this.props;

        return (
            <div className={`player-zone pz-${player.id} your-turn`}>

                <p className="text-center player-name"><strong>{player.name}</strong></p>

                <img src="/images/user.svg" alt="User"/>

                <div className="hidden-cards">
                    <img src="/images/card-back.jpg" alt="Card Back"/>
                    <img src="/images/card-back.jpg" alt="Card Back"/>
                    <img src="/images/card-back.jpg" alt="Card Back"/>
                    <img src="/images/card-back.jpg" alt="Card Back"/>
                    <img src="/images/card-back.jpg" alt="Card Back"/>
                    <img src="/images/card-back.jpg" alt="Card Back"/>
                    <img src="/images/card-back.jpg" alt="Card Back"/>
                    <img src="/images/card-back.jpg" alt="Card Back"/>
                </div>
            </div>
        );
    }
}

export default Player;