import React, {Component} from 'react';
import DeskCard from "./DeskCard";

class DeskCards extends Component {


    render() {
        return (
            <div className="inner-desk">

                <DeskCard/>
                <DeskCard/>
                <DeskCard/>
                <DeskCard/>
                <DeskCard/>

            </div>
        );
    }
}

export default DeskCards;