import React, { useState } from "react";

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

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <ul className="list-group">
        <h1>List</h1>
        {countries.map((country, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default listGroup;
