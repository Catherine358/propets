import { BASE_URL_SEARCHING } from "../constants/Constants";

export const getPostLostPets = () => {
  return fetch(`${BASE_URL_SEARCHING}losts?pageNumber=${0}&pageSize=${2}`, {
      method: 'GET',
      headers: {
          'X-Token': 'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJ5Lm1hdHZleWV2YTE5OTRAZ21haWwuY29tIiwiZXhwIjoxNTkxMTAwOTg5LCJyb2xlcyI6WyJST0xFX1VTRVIiXX0.WOZgFOectJ4IGKavCv88_0hGEYIw28gk-_NKu5U1qYB_oenSTKrCyT9SczdRi3ymFu3swlLSwhJRKv-nZuuJdg',
          'Content-Type': 'application/json'
      }
  })
      .then(response => {
          console.log(response)
          return response.json();
      })
};