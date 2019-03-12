import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('/api/users')
            .then( response => response.data)
            .then( users => this.setState({ users }))
    }

    render() {
        const { users } = this.state;

        return (
            <div>
                <ul>
                    {
                        users.map( user => {
                            return (
                                <li key={user.id} className="nav-item">
                                    {user.name}
                                    <ul>
                                        {
                                            user.favorites.map( fav => {
                                                return (
                                                    <li key={fav.id}>
                                                        {fav.thing.name}(Ranked: {fav.rank})
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UserList;
