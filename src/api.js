import fetch from "isomorphic-fetch";

export function fetchComments() {
    return fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(res => res);
}