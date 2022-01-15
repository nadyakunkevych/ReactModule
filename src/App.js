import Users from "./components/Users";
import Posts from "./components/Posts";
import {useState} from "react";
import UserDetails from "./components/UserDetails";
import css from "./components/App.module.css"




const App = () => {

    const [user, setUser] = useState(null);
    const getUser = (user) => {
        setUser(user)

    }

    // const getUserId = (id) => {
    //     function setUserId(id) {
    //


    return (
        <div>
            <div className={css.wrap}>

                <Users getUser = {getUser}/>
            <UserDetails/>
        </div>
            <Posts/>

        </div>
    );
}


export default App;