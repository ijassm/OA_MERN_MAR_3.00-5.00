import React from "react";
import { Component2 } from "./Component2";

const data = "sunil";

export function Component1() {
  console.log(data, "com1");
  return (
    <>
      <h1>Component1</h1>
      <p>Waiting for Data - {data ? data : "Not found"}</p>
      <Component2 data={data} />
    </>
  );
}
