import React, { Component } from 'react';
import axios from 'axios';

class ThingList extends Component {
    constructor() {
        super()
        this.state = {
            things: []
        }
    }

    componentDidMount() {
        axios.get('/api/things')
            .then( response => response.data)
            .then( things => this.setState({ things }))
    }

    render() {
        const { things } = this.state;
        return (
            <div>
                <ul>
                    {
                        things.map( thing => {
                            return (
                                <li key={thing.id} className="nav-item">
                                    {thing.name}
                                    <ul>
                                        {
                                            thing.favorites.map( fav => {
                                                return (
                                                    <li key={fav.id}>
                                                        favorited by: {fav.user.name}
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

export default ThingList;
