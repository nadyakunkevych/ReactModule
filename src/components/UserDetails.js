import React from 'react';
import css from "./App.module.css"

const UserDetails = ({user, getUserId}) => {
    const {id, name, username, email, address, phone, website, company} = user;


    return (

        <div  className={css.box}>
            <div> <strong>Id: </strong>{id}</div>
            <div> <strong>Name: </strong>{name}</div>
            <div> <strong> Username: </strong>{username}</div>
            <div> <strong> Email: </strong>{email}</div>
            <div> <strong> Address: </strong> {address.street} St., {address.suite}, {address.city}, {address.zipcode}</div>
            <div> <strong> Phone: </strong>{phone}</div>
            <div> <strong> Website: </strong>{website}</div>
            <div> <strong> Company: </strong>{company.name}</div>
            <div> <strong> CatchPhrase: </strong>{company.catchPhrase}</div>
            <div> <strong> BS: </strong>{company.bs}</div>



            <button className={css.postButton} onClick={()=> getUserId(id)}> Posts</button>

        </div>


    );

};

export default UserDetails;