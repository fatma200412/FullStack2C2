// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./list.scss";

function List({ valueInput, setValueInput }) {
  let meyveler = ["alma", "armud", "banan", "kivi"];

  console.log(uuidv4());
  console.log(meyveler[0]);

  console.log("value", valueInput);
  return (
    <div className="listsDiv">
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          //     console.log(e.target.value);
          setValueInput(e.target.value);
        }}
      />
      <h1>Meyvelerin listi</h1>
      {/* <p>{meyveler[0]}</p> */}
      <ul>
        {meyveler.map((meyve, i) => {
          return (
            <li key={uuidv4()}>
              {meyve} <b> {uuidv4()} </b>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
