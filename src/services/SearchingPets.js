import { BASE_URL_SEARCHING } from "../constants/Constants";

export const getPostLostPets = () => {
    const token = localStorage.getItem('token');
  return fetch(`${BASE_URL_SEARCHING}/losts?currentPage=${0}&itemsOnPage=${5}`, {
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

export const getPostFoundPets = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL_SEARCHING}/founds?currentPage=${0}&itemsOnPage=${5}`, {
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

export const postLostPet = (email, post) => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL_SEARCHING}/lost/${email}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'X-Token': token
      },
      body: JSON.stringify(post)
  })
      .then(response => {
          console.log(response)
          return response.json();
      })
};