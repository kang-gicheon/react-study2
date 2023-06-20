import { useState } from "react";
import "./App.css";
import Info from "./info";

const App = () => {
  const [visible, setvisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setvisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;
