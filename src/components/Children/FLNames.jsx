import React from "react";
import "../freelancers.css";
function FLNames({ Props }) {
  return (
    <div className="FLNames">
      {Props.map((i, indx) => {
        return (
          <h4 key={indx} className="FLNamesEtiqueta">
            {i.nombre}
          </h4>
        );
      })}
    </div>
  );
}

export default FLNames;
