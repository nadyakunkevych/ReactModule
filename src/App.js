import {Route, Routes} from "react-router-dom"

import css from './App.module.css';
import UsersPage from "./pages/UsersPage/UsersPage"
import PostsPage from "./pages/PostsPage/PostsPage"
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import Layout from "./components/Layout/Layout";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage"
import CommentsPage from "./pages/CommentsPage/CommentsPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}/>
                            <Route path={':id/users/:id/comments'} element={<CommentsPage/>}>

                                </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}/>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>

            </Routes>
        </>
    );
}

export default App;