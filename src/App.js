import Users from "./components/Users";
import Posts from "./components/Posts";
import {useState} from "react";
import UserDetails from "./components/UserDetails";
import css from "./components/App.module.css"
import {postService} from "./components/post.service";



const App = () => {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [posts, setPosts] = useState(null);


    const getUser = (user) => {
        setUser(user)
    }


    const getUserId= (id) => {

        postService.getByUserId(id).then(value => setPosts([...value]))
    }



    return (
        <div>
            <div className={css.wrap}>

                <Users getUser = {getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
        </div>
            <Posts posts={posts}/>

        </div>
    );
}


export default App;