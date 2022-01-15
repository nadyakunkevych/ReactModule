import User from "./User";
import {userService} from "./user.service";
import {useEffect, useState} from "react";



const Users = ({getUser}) => {
    const [users, setUsers] = useState ([]);


    useEffect (() => {
        userService.getAll().then(value => setUsers(value))

    }, [])


    return (

        <div>
            {users.map(user =>  <User key={user.id} user={user} getUser = {getUser}/>)}
        </div>
    )
}

export default Users;