import {urls} from "./urls";

export const userService = {
    getUserId: (id) => fetch (`https://jsonplaceholder.typicode.com/users/$(urls.users)?userId=${id}`).then (value => value.json()),
    getAll() {

    }
}