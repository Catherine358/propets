import { BASE_URL_ACCOUNTING } from "../constants/Constants";

export const Login = (email, password) => {
    // const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64');
    const token = btoa(email + ":" + password);
    return fetch(`${BASE_URL_ACCOUNTING}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${token}`
        },
    })
        .then(response => {
            console.log(response);
            return response.json();
        });
};

export const Register = (name, email, password) => {
  return fetch(`${BASE_URL_ACCOUNTING}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name: name,
          email: email,
          password: password
      })
  })
      .then(response => {
          console.log(response);
          return response.json();
      });
};