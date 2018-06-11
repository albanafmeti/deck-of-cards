import React, {Component} from 'react';

class Actions extends Component {


    render() {
        return (
            <div className="actions m-3">
                <div className="card">
                    <div className="card-body">

                        <div className="text-center">

                            <a href="/" className="btn btn-info btn-sm pull-right">RESET</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Actions;