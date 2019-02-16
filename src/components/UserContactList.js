import React from 'react';
import UserContact from './UserContact';

class UserContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            sortDirection: -1,
            users: this.props.users
        }
    }

    handleSearchTextChanged = (event) => {
        this.setState({ searchText: event.target.value });
    }

    matchSearchText(user) { return user.name.first.includes(this.state.searchText) || user.name.last.includes(this.state.searchText) || user.name.title.includes(this.state.searchText) }

    handleSort = () => {
        let newSortDirection = this.state.sortDirection * (-1);
        this.setState({ sortDirection: newSortDirection });
        this.setState({ users: this.state.users.sort((user1, user2) => {
            if (user1.name.last < user2.name.last) { return -1 * newSortDirection; }
            if (user1.name.last > user2.name.last) { return 1 * newSortDirection; }
            return 0;
        }) });
    }

    render() {
        return (
            <div style={{ marginTop: 50 }}>
                <div style={{ marginLeft: 40 }} className="input-group mb-3 col-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                        value={this.state.searchText} onChange={this.handleSearchTextChanged} />
                    <button style={{ marginLeft: 20 }} type="button" class="btn btn-secondary" onClick={this.handleSort}>Sort</button>
                </div>
                {this.state.users
                    .filter(user => this.matchSearchText(user))
                    .map(user => <UserContact key={user.name.last} user={user} />)}
            </div>
        )
    }
}

export default UserContactList;