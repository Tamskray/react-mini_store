import React from "react";

import MySelect from "./UI/MySelect";
import MyCategoryCheckbox from "./UI/MyCategoryCheckbox";

function SortFilter({ sortProduct, selectedSort, filter, setFilter }) {
  return (
    <>
      <MySelect
        defaultValue="Sort by"
        value={filter.selectedSort}
        onChange={(sort) => setFilter({ ...filter, selectedSort: sort })}
        options={[
          { value: "title", name: "By name" },
          { value: "price", name: "By price" },
          { value: "rating", name: "By rate" },
        ]}
      />
      <MyCategoryCheckbox
        categoryName="electronics"
        filter={filter}
        setFilter={setFilter}
      />
      <MyCategoryCheckbox
        categoryName="jewelery"
        filter={filter}
        setFilter={setFilter}
      />
      <MyCategoryCheckbox
        categoryName="men's clothing"
        filter={filter}
        setFilter={setFilter}
      />
      <MyCategoryCheckbox
        categoryName="women's clothing"
        filter={filter}
        setFilter={setFilter}
      />
    </>
  );
}

export default SortFilter;
