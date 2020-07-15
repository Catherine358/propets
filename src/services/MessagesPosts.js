import { BASE_URL_POSTS } from "../constants/Constants";

export const getAllPosts = () => {
    const token = localStorage.getItem('token');
    return fetch(`${BASE_URL_POSTS}/view/?itemsOnPage=${5}&currentPage=${0}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Token': token
        }
    })
        .then(response => {
            console.log(response)
            return response.json();
        })
};