import React from "react";

const Search = props => {
  let { value, changeHandler } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Title"
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Search;
