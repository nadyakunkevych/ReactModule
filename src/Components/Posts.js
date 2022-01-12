import {useEffect, useState} from 'react';
import Post from "./Post"

const Posts = () => {

    let [posts, setPosts] = useState([]);



    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(value => {
                setPosts(value)

            })
    }, []);

    return (
        <div>

                {
                    posts.map(value => <li key={value.id}> {value.title}</li>)
                }



        </div>
    );
};

export default Posts;