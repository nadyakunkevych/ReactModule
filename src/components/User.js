import React from 'react';

const User = ({user, getUser}) => {
    const {id, name} = user;
    return (
        <div>
            <div> {id} {name} </div>
            <button onClick={()=>getUser(user)}> GetDetails </button>
        </div>
    );
};

export default User;