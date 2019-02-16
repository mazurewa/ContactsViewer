import React from 'react';
import '../styles/UserContact.css'
import { Link } from 'react-router-dom'

function UserContact(props) {

    let user = props.user;
    return (
        <div>
            <div className="card-body">
                <Link to={"/contact/" + user.name.last}>{user.name.title} {user.name.first} {user.name.last}</Link>
                <div>Email: {user.email}</div>
                <div>Phone number: {user.cell}</div>
            </div>
        </div>
    )
}

export default UserContact;