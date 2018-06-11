import React, {Component} from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Game from './components/game/Game';
import NotFound from "./components/general/NotFound";

class App extends Component {
    render() {
        return (
            <BrowserRouter>

                <div className="main-content">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/play"/>}/>

                        <Route exact path="/play" component={Game}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;