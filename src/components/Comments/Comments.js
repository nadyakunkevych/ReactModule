import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {userService} from "../../services/user.service";
import CommentsPage from "../../pages/CommentsPage/CommentsPage";



const Comments = ({comment}) => {
    const [comments, setComments] = useState([]);
    useEffect( ()=> {
        userService.getAll(userId).then(value => setComments([...value]))
    }, [userId])
    return (
        <div>
            <div>
                <h1>Comments</h1>
                {comments.map(comment=> <CommentsPage key={comment.id} comment={comment}/> )}
            </div>
            <div><Outlet/></div>

        </div>
    );
};

export default Comments;