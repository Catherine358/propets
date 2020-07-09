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
            for (let pair of response.headers.entries()) { // accessing the entries
                if (pair[0] === 'x-token') { // key I'm looking for in this instance
                    localStorage.setItem('token', pair[1]);
                }
            }
            return response.json();
        });
};

export const Register = (name, email, password) => {
    console.log(name, " ", email, " ", password);
    const user = {
        name: name,
        email: email,
        password: password
    };
  return fetch(`${BASE_URL_ACCOUNTING}`, {
      method: 'POST',
      headers: {
              'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
  })
      .then(response => {
          console.log(response);
          for (let pair of response.headers.entries()) { // accessing the entries
              if (pair[0] === 'x-token') { // key I'm looking for in this instance
                  localStorage.setItem('token', pair[1]);
              }
          }
          return response.json();
      });
};