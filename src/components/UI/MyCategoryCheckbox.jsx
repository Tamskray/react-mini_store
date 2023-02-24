import React, { useState } from "react";

import cl from "./MyCategoryCheckbox.module.css";

function MyCategoryCheckbox({ categoryName, filter, setFilter }) {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);

    !isChecked
      ? setFilter({
          ...filter,
          category: { ...filter.category, [categoryName]: true },
        })
      : setFilter({
          ...filter,
          category: { ...filter.category, [categoryName]: false },
        });
  };

  return (
    <>
      <span className={cl.mySpan} onClick={checkHandler}>
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={checkHandler}
        />
        <label>{categoryName}</label>
      </span>
    </>
  );
}

export default MyCategoryCheckbox;
