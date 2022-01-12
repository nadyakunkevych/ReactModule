
import './App.css';
import Users from "./Components/Users";
import Posts from "./Components/Posts";
import Comments from "./Components/Comments";
// import {useEffect, useState} from "react";

function App() {



  return (
    <div className={"wrap"}>
        <div className={"two-boxes"}>
          <div className={"user-box"}> <Users/> </div>
          <div className={"post-box"}> <Posts/> </div>

        </div>
        <div className={"comment-box"}> <Comments/> </div>

    </div>
  );
}

export default App;
