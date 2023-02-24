import React from "react";

import MyInput from "./UI/MyInput";

function SearchProduct({ filter, setFilter }) {
  return (
    <>
      <MyInput
        value={filter.searchQuery}
        onChange={(e) => setFilter({ ...filter, searchQuery: e.target.value })}
        placeholder="Search.."
      />
    </>
  );
}

export default SearchProduct;
