import React from "react";

function Variable() {
  let test_1 = typeof 42;
  let test_2 = typeof "hello";
  let test_3 = typeof { name: "hi" };
  let test_4 = typeof true;
  let test_5 = typeof false;
  let test_6 = typeof function () {};
  let test_7 = typeof null;
  let test_8 = typeof undefined;
  let test_9 = typeof [12, 45, "hello"];
  let test_10 = Array.isArray([12, 45, "hello"]);
  let test_11 = Array.isArray({ name: "hello" });
  let test_12 = Number.isNaN("number");
  return (
    <div>
      <div>typeof 42 is: {test_1}</div>
      <div>{test_2}</div>
      <div>{test_3}</div>
      <div>{test_4}</div>
      <div>{test_5}</div>
      <div>{test_6}</div>
      <div>{test_7}</div>
      <div>{test_8}</div>
      <div>{test_9}</div>
      <div>{String(test_10)}</div>
      <div>{String(test_11)}</div>
      <div>Array.isArray([12, 45, "hello"]): {test_11 ? "true" : "false"}</div>
      <div>Number.isNaN: {String(test_12)}</div>
    </div>
  );
}

export default Variable;
