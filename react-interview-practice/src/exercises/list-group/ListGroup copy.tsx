import React, { useState } from "react";
import { MouseEvent } from "react";

function listGroup() {
  let countries = [
    "Nigeria",
    "Cameroun",
    "Ghana",
    "Ivory-Coast",
    "Bokina-Faso",
    "Nigel",
    "Mali",
  ];

  // Hooks
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler
  function handleClick() {
    setSelectedIndex((prev) => prev + 1);
  }

  return (
    <div>
      <h1 className="list-group">List</h1>
      <ul className="list-group ">
        {countries.map((country, index) => (
          <li
            key={country}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={handleClick}
          >
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default listGroup;
