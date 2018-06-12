import React, {Component} from 'react';
import PropTypes from "prop-types";

class Card extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired,
        isTurn: PropTypes.bool.isRequired,
        onThrowCard: PropTypes.func.isRequired,
    };

    throwCard = () => {
        this.props.onThrowCard(this.props.card);
    };

    render() {

        const {card, isTurn} = this.props;

        let throwCardOption = null;
        if (isTurn) {
            throwCardOption = <div className="hover-button">

                <div className="p-5">
                    <i className="fa fa-2x fa-arrow-circle-up" aria-hidden="true"
                       onClick={this.throwCard}></i>
                </div>

            </div>
        }

        return (
            <div className="single-card">

                {throwCardOption}

                <img src={card.image} alt="Card"/>
            </div>
        );
    }
}

export default Card;