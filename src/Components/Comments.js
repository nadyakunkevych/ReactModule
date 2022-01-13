import {useEffect, useState} from 'react';
import Comment from "./Comment";
const Comments = () => {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(value => value.json())
            .then(value => {
                setComments(value)

            })
    }, []);

    return (
        <div>
<ul>
                {
                    comments.map(value => <li key={value.id}> comment = {value.name}</li>)
                }
                    </ul>
        </div>
                );
};

export default Comments;