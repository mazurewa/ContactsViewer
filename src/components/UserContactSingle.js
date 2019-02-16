import React from 'react';
import { Link } from 'react-router-dom'
import UserContact from './UserContact'

function UserContactSingle(props) {

    let user = props.user;
    return (
        <div style={{marginTop: 50}}>
            <Link style={{margin: 50}} to="/contacts">
                    <button type="button" class="btn btn-info btn-lg">Back</button>
                </Link>
            <UserContact user={user} />
        </div>
    )
}

export default UserContactSingle;