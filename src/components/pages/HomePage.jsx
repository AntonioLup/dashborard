import React, { useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import LogicForm from "../LoginForm";
import Freelancers from "../Freelancers";
import Layout from "../Layout";
import reactLogo from "../../assets/react.svg";
import OptionPages from "../OptionPages";
import Search from "../Search";
import Users from "./Users";

function HomePage() {
  const [user, SetUser] = useState();
  const [search, SetSearch] = useState("");
  const [check, SetChecked] = useState([]);
  return (
    <div className="App">
      <div className="AppNavbar">
        <picture>
          <Link href="/" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </Link>
        </picture>

        <LogicForm />

        <Freelancers user={user} check={check} SetChecked={SetChecked} />
        <Link to={"/account"}>Account</Link>
      </div>
      <div className="card">
        <h1>dashboard</h1>
        <OptionPages />
        <Outlet
          context={{
            user: user,
            SetChecked: SetChecked,
            check: check,
            SetSearch: SetSearch,
            search: search,
            SetUser: SetUser,
          }}
        />
      </div>
    </div>
  );
}

export default HomePage;
