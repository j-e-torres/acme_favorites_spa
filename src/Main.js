import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import UserList from './UserList';
import Navbar from './NavBar'
import ThingList from './ThingList';


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Acme Favorites</h1>
                    <Navbar />
                    <Route exact path="/" component={UserList} />
                    <Route exact path="/users" component={UserList} />
                    <Route exact path="/things" component={ThingList} />
                </div>

            </HashRouter>
        )
    }
}

export default Main;
