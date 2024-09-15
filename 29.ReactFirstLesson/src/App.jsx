import { useState } from "react";
import "./App.css";
import Button from "./components/button/button";
import Card from "./components/card/card";
import List from "./components/list/list";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      {/* <h1>App</h1> */}
      <Card />
      {/* <Button /> */}
      <List valueInput={value} setValueInput={setValue} />
    </>
  );
}

export default App;
