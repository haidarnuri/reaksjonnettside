import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function changeState() {
    console.log(user);
    axios
      .post("http://localhost:8800/create", {
        user: user,
        pass: pass,
      })
      .then(() => console.log("success!"));
  }

  return (
    <div className="formsection">
      <label>Username:</label>
      <input
        id="inputUserName"
        type="text"
        placeholder="skriv brukernavn"
        onChange={(e) => setUser(e.target.value)}
      />

      <label>Passord:</label>
      <input
        id="inputPassword"
        type="text"
        placeholder="skriv passord"
        onChange={(e) => setPass(e.target.value)}
      />

      <input type="submit" value="Log inn" onClick={changeState} />
    </div>
  );
}
