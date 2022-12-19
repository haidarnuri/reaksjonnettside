import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");

  return (
    <div className="formsection">
      <label>Username:</label>
      <input type="text" placeholder="skriv brukernavn" />

      <label>Passord: {user}</label>
      <input type="text" placeholder="skriv passord" />
    </div>
  );
}
