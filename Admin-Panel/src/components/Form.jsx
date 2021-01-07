import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (props) => {
    Axios.post("http://localhost:3002/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.status === 202) {
          setStatus(`${response.request.responseText}`);
        } else if (response.status === 200) {
          setEmail("");
          setPassword("");
          localStorage.setItem("token", response.data.token);

          history.push("/admin");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-form">
      <h2 className="login-title">WELCOME BACK</h2>
      <div id="form">
        <div className="error">{status}</div>
        <input
          type="email"
          required
          className="login"
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus("");
          }}
          placeholder="Email"
          value={email}
        />
        <br />
        <input
          type="password"
          required
          className="login"
          onChange={(e) => {
            setStatus("");
            setPassword(e.target.value);
          }}
          placeholder="Password"
          value={password}
        />
        <br />
        <input
          type="submit"
          className="add"
          value="Submit"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Form;
