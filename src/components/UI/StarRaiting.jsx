import React from "react";
import Rating from "@mui/material/Rating";

function StarRaiting({ rateValue }) {
  return (
    <>
      <Rating name="read-only" value={rateValue} readOnly />
    </>
  );
}

export default StarRaiting;
