import { BASE_URL_SEARCHING } from "../constants/Constants";

export const getPostLostPets = () => {
  return fetch(`${BASE_URL_SEARCHING}losts?${0}&${2}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'X-Token': 'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJ5Lm1hdHZleWV2YTE5OTRAZ21haWwuY29tIiwiZXhwIjoxNTkwNjc0NDkwLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0._cbl8G5yBQsCSuKDq6pT19x3FZstuc-QjY3EmpzQN0daqatHY0iygwq1Jt8Tj86fpN1zKWXWJ-doOWVZM5S56Q'
      }
  })
      .then(response => {
          console.log(response)
          return response.json();
      })
};