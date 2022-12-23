import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function addToDBAndLogin() {
    axios
      .post("http://localhost:8800/createuser", {
        user: user,
        pass: pass,
      })
      .then(() => console.log("success!"));
    navigate("/reactionsite");
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

      <input type="submit" value="Log inn" onClick={addToDBAndLogin} />
    </div>
  );
}
