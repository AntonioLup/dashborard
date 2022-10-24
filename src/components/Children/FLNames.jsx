import React, { useCallback, useRef, useState } from "react";
import { useEffect } from "react";
import "../freelancers.css";
function FLNames({ user, handleFilter }) {
  const [checked, setChecked] = useState([]);
  const [side, setSide] = useState([]);
  const checkRef = useRef(null);
  function handleSearch(e) {
    const currentIndex = checked.indexOf(e);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(e);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    handleFilter(newChecked);
  }

  const uniquName = [];
  const uniqueValue =
    user &&
    user?.filter((filter) => {
      const has = filter.employment.key_skill;
      const isDuplicate = uniquName.includes(has);
      if (!isDuplicate) {
        uniquName.push(has);
        return true;
      }
      return false;
    });
  console.log(uniqueValue);

  return (
    <>
      {uniqueValue &&
        uniqueValue?.map((i) => {
          return (
            <div key={i.id} className="FLNames">
              <span className="OptionContainer">
                <input
                  ref={checkRef}
                  id={i.employment.key_skill}
                  onChange={() => handleSearch(i.employment.key_skill)}
                  type="checkbox"
                  defaultChecked={checked.indexOf(i.id) === -1 ? false : true}
                />
                <label htmlFor={i.employment.key_skill}>
                  {i.employment.key_skill}
                </label>
              </span>
            </div>
          );
        })}
    </>
  );
}

export default FLNames;
