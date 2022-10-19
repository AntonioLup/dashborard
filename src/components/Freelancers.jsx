import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FLNames from "./Children/FLNames";
import "./freelancers.css";
// acordeon para despreglar los freelancers
function Freelancers({ Props }) {
  return (
    <div className="freelancers">
      <h3>Freelancers</h3>
      <FLNames Props={Props} />
    </div>
  );
}

export default Freelancers;
