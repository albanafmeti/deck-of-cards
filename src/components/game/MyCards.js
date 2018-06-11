import React, {Component} from 'react';

class MyCards extends Component {


    render() {
        return (
            <div>
                <p className="text-center m-0">
                    YOUR HAND
                </p>
                <div className="my-cards m-3">
                    <div className="single-card"><img src="/images/card.png" alt="Card"/></div>
                    <div className="single-card"><img src="/images/card.png" alt="Card"/></div>
                    <div className="single-card"><img src="/images/card.png" alt="Card"/></div>
                    <div className="single-card"><img src="/images/card.png" alt="Card"/></div>
                    <div className="single-card"><img src="/images/card.png" alt="Card"/></div>
                    <div className="single-card"><img src="/images/card.png" alt="Card"/></div>
                    <div className="single-card"><img src="/images/card.png" alt="Card"/></div>
                    <div className="single-card"><img src="/images/card.png" alt="Card"/></div>
                    <div className="single-card"><img src="/images/card.png" alt="Card"/></div>
                    <div className="single-card"><img src="/images/card.png" alt="Card"/></div>
                </div>
            </div>
        );
    }
}

export default MyCards;