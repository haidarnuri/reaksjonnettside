import React, { useState } from "react";

export default function Login() {
  /*
  [user, setUser] = useState();

  */

  function changeState() {
    console.log(document.getElementById("inputUserName").value);
    console.log(document.getElementById("inputPassword").value);
  }

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
