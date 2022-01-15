import {urls} from "./urls";

export const userService = {
    getUserId: (id) => fetch (`https://jsonplaceholder.typicode.com/posts/$(urls.posts)?userId=${id}`).then (value => value.json()),

}