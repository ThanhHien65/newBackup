import React, { useState } from "react";
import "../"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Login">
      <form action="">
        <p>Username</p>
        <input type="text" name="username" />
        <p>Password</p>
        <input type="password" name="password" />
        <button type="submit" style={{ display: "block" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
