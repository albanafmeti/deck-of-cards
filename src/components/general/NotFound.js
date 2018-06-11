import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {

    return (
        <div className="text-center p-5">
            <h1><i className="fa fa-frown-o"></i></h1>
            <h3>Page not found.</h3>
            <p className="my-5"><Link to="/"><i className="fa fa-arrow-left"></i>&nbsp;&nbsp;Back to Game</Link></p>
        </div>
    );

};

export default NotFound;