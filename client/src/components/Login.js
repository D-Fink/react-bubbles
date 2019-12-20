import React, {useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({username: '', password: ''});

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubbles'); 
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleLogin}>
        <input type='text' name='username' value={credentials.username} onChange={handleChange} />
        <input type='text' name='password' value={credentials.password} onChange={handleChange} />
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
