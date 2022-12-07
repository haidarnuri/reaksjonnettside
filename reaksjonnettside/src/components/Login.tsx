import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/user";

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.value);
  return (
    <>
      <h1>Skriv inn informasjon</h1>
      <p>Navn: {user.name}</p>
      <p>Passord: {user.Passord}</p>
      <button
        onClick={() => {
          dispatch(login({ name: "Jaodar", Passord: "ahha" }));
        }}
      >
        Trykk her
      </button>
    </>
  );
}
