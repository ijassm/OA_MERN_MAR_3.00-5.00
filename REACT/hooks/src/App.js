import { useState } from "react";

export const App = () => {
  let [person, setPerson] = useState({
    name: "",
    age: 0,
  });

  console.log("App re-render");

  return (
    <>
      <h1
        onClick={() => {
          // setPerson((prev) => {
          //   return { ...prev, name: "sunil" };
          // });
          setPerson({ ...person, name: "sunil" });
          console.log("clicked");
        }}
      >
        name : {JSON.stringify(person)} <br />
      </h1>
      <h1
        onClick={() => {
          setPerson({ ...person, age: 10 });
          console.log("clicked");
        }}
      >
        age : {person.age} <br />
      </h1>
    </>
  );
};
