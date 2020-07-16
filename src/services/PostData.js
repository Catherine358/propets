import { BASE_URL_POST_DATA } from "../constants/Constants";

export const getFavouritePosts = (email) => {
    const token = localStorage.getItem('token');
    return fetch(`${BASE_URL_POST_DATA}/${email}/favorites`, {
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