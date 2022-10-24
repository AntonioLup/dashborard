import React from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./cardchildren.css";
import CrudCard from "./crudcard/CrudCard";
import Freelancers from "./Freelancers";
function Cards({ props, setProps, check, SetChecked, user, search }) {
  return (
    <div className="cardcontainer">
      {/* imprimir mi cuenta */}
      {/* <CrudCard /> */}

      {props &&
        props
          ?.filter((filt) => {
            return (
              filt.username.toLowerCase().includes(search) &&
              filt.employment.key_skill.includes(check)
            );
          })
          ?.map((i) => {
            return (
              <div className="cardchildren" key={i.id}>
                <picture>
                  {i.avatar && (
                    <img
                      src={i.avatar}
                      alt={i.first_name}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </picture>
                <div className="cardNames">
                  <p>{"@" + i.username}</p>
                </div>
                <p className="cardphrase">
                  I don't have a description, because the api doesn't have it 😎
                </p>

                <div className="tagscontainer">
                  <span className="tags">{"#" + i.employment.title}</span>
                  <span className="tags">{"#" + i.employment.key_skill}</span>
                </div>
                <div className="buttonscontainer">
                  <button>Contact</button>
                  <button>More info</button>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default Cards;
