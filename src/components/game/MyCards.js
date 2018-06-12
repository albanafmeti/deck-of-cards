import React, {Component} from 'react';
import Card from "./Card";
import PropTypes from "prop-types";

class MyCards extends Component {

    static propTypes = {
        cards: PropTypes.array.isRequired,
        isTurn: PropTypes.bool.isRequired,
        onThrowCard: PropTypes.func.isRequired,
    };

    onThrowCard = (card) => {
        this.props.onThrowCard(card);
    };

    render() {

        const {cards, isTurn} = this.props;

        const cardComponents = cards.map((card, index) => {
            return <Card card={card} isTurn={isTurn}
                         onThrowCard={this.onThrowCard}
                         key={index}/>;
        });

        return (
            <div>
                <p className="text-center m-0">
                    YOUR HAND
                </p>
                <div className="my-cards m-3">

                    {cardComponents}

                </div>
            </div>
        );
    }
}

export default MyCards;