// import {urls} from "./urls";
//
// export const userService = {
//     getUserId: (id) => fetch (`https://jsonplaceholder.typicode.com/posts/$(urls.posts)?userId=${id}`).then (value => value.json()),
//
// }


import {urls} from "../configs/urls";

const getAll = () => {
    return fetch(urls.users)
        .then(value => value.json())
}