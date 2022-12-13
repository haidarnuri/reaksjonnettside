import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin() {
    let userHTML = document.getElementById("username") as HTMLInputElement;
    let userHTMLvalue = userHTML.value;

    let passwordHTML = document.getElementById("password") as HTMLInputElement;
    let passwordHTMLvalue = passwordHTML.value;

    dispatch(login({ name: userHTMLvalue, Passord: passwordHTMLvalue }));
    navigate("/myprofile");
  }

  return (
    <>
      <h1>Skriv inn informasjon</h1>
      <form>
        <label>
          Brukernavn:
          <input name="username" id="username"></input>
        </label>
        <br />
        <br />
        <label>
          Passord:
          <input type="password" name="password" id="password"></input>
        </label>
        <br />
        <br />
        <label>
          <input
            type="button"
            onClick={handleLogin}
            name="loginSubmit"
            id="loginSubmit"
            value="Logg inn"
          ></input>
        </label>
      </form>
    </>
  );
}
