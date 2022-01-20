import baseUrl, {urls} from "./urls";


export let postService = {
    getUserId: (id) => fetch (`https://jsonplaceholder.typicode.com/posts/$(urls.posts)?userId=${id}`).then (value => value.json()),

    getByUserId: () => () => fetch(baseUrl + urls.users).then(value=> value.json()),


}
