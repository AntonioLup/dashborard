import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Cards from "./Cards";
import CrudCard from "./crudcard/CrudCard";
import Freelancers from "./Freelancers";
import "./freelancers.css";
function Layout() {
  const { user, SetUser, search, check, SetChecked } = useOutletContext();

  async function fetchPeople() {
    await fetch(` https://random-data-api.com/api/v2/users?size=6&is_xml=true`)
      .then((response) => response && response.json())
      .then((data) => {
        SetUser(data);
      });
  }
  useEffect(() => {
    fetchPeople();
  }, []);
  return (
    <>
      <Cards
        props={user}
        check={check}
        SetChecked={SetChecked}
        search={search}
        setProps={SetUser}
      />
    </>
  );
}

export default Layout;
