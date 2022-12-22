import React, { useEffect, useState } from "react";
//import axios from "axios";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function changeState() {
    console.log(user);
    console.log(pass);
  }

  //Need this to update states immidiatly
  useEffect(() => {
    setInterval(() => {
      setUser(document.getElementById("inputUserName").value);
      setPass(document.getElementById("inputPassword").value);
    }, 1000);
  });

  return (
    <div className="formsection">
      <label>Username:</label>
      <input id="inputUserName" type="text" placeholder="skriv brukernavn" />

      <label>Passord:</label>
      <input id="inputPassword" type="text" placeholder="skriv passord" />

      <input type="submit" value="Log inn" onClick={changeState} />
    </div>
  );
}
