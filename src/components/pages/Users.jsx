import React from "react";
import { useOutletContext } from "react-router-dom";
import Layout from "../Layout";
import Search from "../Search";

function Users() {
  const { user, check, search, SetUser, SetSearch } = useOutletContext();
  return (
    <>
      <Search search={search} SetSearch={SetSearch} />
      <Layout user={user} check={check} search={search} SetUser={SetUser} />
    </>
  );
}

export default Users;
