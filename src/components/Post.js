import css from "./App.module.css"


const Post = ({post:{id, userId, title, body}}) => {
    return (

        <div className={css.container}>

        <div className={css.borderBox}>

            <div> <strong> ID: </strong> {id}</div>
            <div> <strong> USER ID:  </strong> {userId}  </div>
            <div> <strong> TITLE: </strong>{title}  </div>
            <div> <strong> BODY:</strong> {body}</div>
        </div>
        </div>

    );
};


export default Post;


