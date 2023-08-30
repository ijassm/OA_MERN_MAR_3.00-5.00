import React from "react";

export const Component3 = ({ data }) => {
  console.log(data, "com3");
  return (
    <>
      <h1>Component3</h1>
      <p>Waiting for Data - {data ? data : "Not found"}</p>
    </>
  );
};
