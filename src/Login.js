import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": inputs.username,
      "password": inputs.password,
      "expiresIn": 60000
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://www.melivecode.com/api/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.status === "ok") {
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: 'success'
          })
        } else {
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: 'error'
          })
        }
      })
      .catch(error => console.log('error', error));
    console.log(inputs);
  }

  const MySwal = withReactContent(Swal)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>Password:
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;