import React from "react";
import { Link } from "react-router-dom";
import LogicForm from "../LoginForm";
import Freelancers from "../Freelancers";
import Layout from "../Layout";
import reactLogo from "../../assets/react.svg";

function HomePage() {
  const FLlist = [
    {
      nombre: "Antonio",
      email: "Antonio@gmail.com",
      phone: 52352355,
    },
    {
      nombre: "jolimbo",
      email: "jolimbo@gmail.com",
      phone: 1343151,
    },
    {
      nombre: "kiko",
      email: "kiko@gmail.com",
      phone: 6242464,
    },
  ];
  return (
    <div className="App">
      <div className="AppNavbar">
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <LogicForm />

        <Freelancers Props={FLlist} />
        <Link to={"/home"}>Home</Link>
        <Link to={"/account"}>Account</Link>
      </div>
      <div className="card">
        <h1>dashboard</h1>
        <Layout />
      </div>
    </div>
  );
}

export default HomePage;
