import React from "react";

const CustomSelect = () => {
  return (
    <div className="inputContainer">
      <label className="labelOfInput">Source</label>
      <select className="customInput">
        <option>Vehicle A</option>
        <option>Vehicle B</option>
        <option>Vehicle C</option>
      </select>
    </div>
  );
};

export default CustomSelect;
