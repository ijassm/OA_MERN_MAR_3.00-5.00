import React from "react";
import { Component3 } from "./Component3";

export const Component2 = ({ data }) => {
  console.log(data, "com2");
  return (
    <>
      <h1>Component2</h1>
      <p>Waiting for Data - {data ? data : "Not found"}</p>
      <Component3 data={data} />
    </>
  );
};
