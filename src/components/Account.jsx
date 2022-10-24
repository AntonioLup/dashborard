import React from "react";
import { Link } from "react-router-dom";

function Account() {
  return (
    <div>
      <h1>Account</h1>
      <Link to={"/home"}>Dashboard</Link>
    </div>
  );
}

export default Account;
