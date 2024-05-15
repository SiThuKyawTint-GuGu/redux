import { useState } from "react";
import Plus from "./Plus";
import Minus from "./Minus";
import { useSelector } from "react-redux";

function App() {
  const reduxCount = useSelector((state) => state.countAction.count);

  return (
    <>
      <h1>{reduxCount}</h1>
      <Plus />
      <Minus />
    </>
  );
}

export default App;
