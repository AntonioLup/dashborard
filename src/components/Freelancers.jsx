import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FLNames from "./Children/FLNames";
import "./freelancers.css";
// acordeon para despreglar los freelancers
function Freelancers({ user, check, SetChecked }) {
  const handleFilter = (filter, cards) => {
    const newFilter = { ...filter };
    const multinombres = (newFilter[cards] = filter);

    SetChecked(multinombres);
  };
  return (
    <Accordion TransitionProps={{ unmountOnExit: true }} expanded={true}>
      <AccordionSummary expandIcon={<span className="expan">{"+"}</span>}>
        <h3>Technologys</h3>
      </AccordionSummary>
      <AccordionDetails>
        <FLNames
          user={user}
          handleFilter={(filter) => handleFilter(filter, "cards")}
        />
      </AccordionDetails>
    </Accordion>
  );
}

export default Freelancers;
