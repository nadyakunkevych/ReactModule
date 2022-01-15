import React from 'react';

const UserDetails = (id, name, username, email) => {
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <button>Posts</button>
        </div>
    );
};

export default UserDetails;