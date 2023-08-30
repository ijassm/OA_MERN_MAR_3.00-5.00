import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState({});
  // console.log(setCount);
  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  console.log(movies);
  return (
    <>
      <h1>I've rendered count1 -- {count} times!</h1>;
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);
