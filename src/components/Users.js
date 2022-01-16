import User from "./User";



const Users = ({getUser, users}) => {

    return (

        <div>
            {users.map(user =>  <User key={user.id} user={user} getUser = {getUser}/>)}
        </div>
    )
}

export default Users;