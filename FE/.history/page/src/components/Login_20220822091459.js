import React, { useState } from "react";
import "../Assests/Login.css";
import {
  LoginStatus,
  board,
  TokenStatus,
  Backup,
  ASPBackup,
} from "./Globaldata";
import { useRecoilValue, useRecoilState } from "recoil";
const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [erroCode, setCode] = useRecoilState(TokenStatus);
  const axios = require("axios");
  const [fail, setfail] = useRecoilState(LoginStatus);
  const [Showboard, setBoard] = useRecoilState(board);
  const [statuday, setStatusDay] = useRecoilState(Backup);
  const [statuday, setStatusDay] = useRecoilState(Backup);

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/log", {
        username: user,
        password: password,
      })
      .then((response) => {
        // setfail(!fail);
        // setBoard(!Showboard);
        console.log(response.data);
        setStatusDay(response.data.backupday);
        window.localStorage.setItem("AccessToken", response.data.token);
      })
      .catch((err) => {
        setCode(err.response.data.msg);
        console.log(erroCode);
      });
    document.getElementById("form-login").reset();
  };
  const statusError = () => {
    return (
      <p
        style={{
          fontSize: "1.3rem",
          fontWeight: "bold",
          color: "red",
          textTransform: "capitalize",
        }}
      >
        {erroCode}
      </p>
    );
  };
  return (
    <div className="Login">
      <form id="form-login">
        <p>Username</p>
        <input
          type="text"
          name="username"
          style={{
            padding: "1rem",
            marginTop: "1rem",
          }}
          onChange={(e) => setUser(e.target.value)}
        />
        <p onClick={() => console.log(erroCode)}>Password</p>
        <input
          type="password"
          name="password"
          style={{
            padding: "1rem",
            marginTop: "1rem",
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        {statusError()}
        <button
          type="submit"
          style={{ display: "block", fontSize: "1.5rem" }}
          onClick={submit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
