import React, { Component } from 'react';
import UserContactList from './components/UserContactList';
import UserContactSingle from './components/UserContactSingle';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'

const url = 'https://randomuser.me/api/?results=10';

class App extends Component {

    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch(url)
            .then(response => {
                response.json().then(data => {
                    console.log(data);
                    this.setState({ users: data.results })
                })
            })
    }

    getUserById(id) {
        return this.state.users.find(user => user.name.last === id.match.params.id);
    }

    render() {
        if (this.state.users.length) {
            return (
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <Route path="/" exact component={Home} />
                        <Route path="/home" component={Home}></Route>
                        <Route path="/contacts" render={() => <UserContactList users={this.state.users} />} />
                        <Route path="/contact/:id" render={id => <UserContactSingle user={this.getUserById(id)} /> }/>
                    </div>
                </BrowserRouter>
            );
        }
        return <p>Loading</p>
    }
}

export default App;
