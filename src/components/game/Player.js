import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {subscribe} from 'redux-subscriber';
import {connect} from 'react-redux';

class Player extends Component {

    static propTypes = {
        player: PropTypes.object.isRequired,
    };

    componentDidMount() {
        const unsubscribe = subscribe('deck.deck_id', state => {


        });
    }

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

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);