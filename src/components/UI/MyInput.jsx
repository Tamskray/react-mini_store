import React from "react";

import cl from "./MyInput.module.css";

function MyInput(props) {
  return <input {...props} className={cl.myInput} />;
}

export default MyInput;
