import React, { useState } from "react";
interface Props {
  countries: string[];
  heading: string;
}

function listGroup({ countries, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <ul className="list-group">
        <h1>{heading}</h1>
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
