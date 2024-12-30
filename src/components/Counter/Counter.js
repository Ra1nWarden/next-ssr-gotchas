"use client";
import React from "react";
import Spinner from '../Spinner';

function Counter() {
  const [count, setCount] = React.useState(null);

  React.useEffect(() => {
    const saved = window.localStorage.getItem("saved-count");
    setCount(saved === null ? 0 : Number(saved));
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("saved-count", count);
  }, [count]);

  return (
    <button className="count-btn" onClick={() => setCount(count + 1)}>
      Count: {count === null ? <Spinner /> : count}
    </button>
  );
}

export default Counter;
