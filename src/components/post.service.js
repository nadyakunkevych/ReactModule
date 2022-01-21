
import {urls} from "./urls";

export let postService = {
    getByUserId: (id) => fetch(`https://jsonplaceholder.typicode.com${urls.posts}?userId=${id}`).then(value => value.json()),

}