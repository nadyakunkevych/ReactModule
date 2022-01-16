import {urls} from "./urls";

export const userService = {
    getUser: (id) => fetch (`https://jsonplaceholder.typicode.com/users/$(urls.users)${id}`).then (value => value.json()),

}


// import {urls} from '../urls';
//
// const getAll = () => {
//     return fetch(urls.users)
//         .then(value => value.json())
// }
// export default class baseURL {
// }