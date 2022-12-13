import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "./../index";

function MyProfile() {
  let loginUserNameStore = useSelector(
    (state: RootState) => state.user.value.name
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>Vælkommin {loginUserNameStore}</p>
        <Link to="/">go back</Link>
      </header>
    </div>
  );
}
export default MyProfile;
