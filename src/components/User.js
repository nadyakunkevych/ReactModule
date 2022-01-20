import React from 'react';
import css from "./App.module.css"

const User = ({user, getUser}) => {
    const {id, name} = user;
    return (
        <div className={css.container}>
            <div className={css.borderBox}> {id}. {name} </div>
            <button  onClick={()=>getUser(user)}> GetDetails </button>



        </div>
    );
};

export default User;