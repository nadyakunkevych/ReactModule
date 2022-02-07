import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../store";



const Users = () => {
   const {users} = useSelector(store => store.user);
   const dispatch = useDispatch();

   const submit = (e) => {
       e.preventDefault()
       const name = e.target.userName.value;
       const user = {id:new Date().getTime(), name}
       dispatch(addUser({user}))
    }

    return (
        <div>
            <h3> Users </h3>
            <form onSubmit={submit}>
                <input type="text" placeholder={"enter anything"} name={"userName"}/>
                <button> save </button>
            </form>
            {users.map(user => <div key={user.id}> {user.name}</div>)}
        </div>
    );
};

export {Users};