import React, { useState } from "react";

const Select = (props) => {
  const { select, name } = props;
  const [currentSelect, setCurrentSelect] = useState(select[0]);

  console.log(currentSelect);
  return (
    <>
      <h3>{name}</h3>
      <select
        value={currentSelect}
        onChange={(e) => setCurrentSelect(e.target.value)}
      >
        {Object.entries(select).map((c) => (
          <option value={c[1]}>{c[1]}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
