import React from 'react';

const User = ({user, getUser}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div> {id} {name} {username} {email}</div>
            <button onClick={()=>getUser(user)}> GetDetails </button>
        </div>
    );
};

export default User;