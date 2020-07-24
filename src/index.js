import React from "react";
import ReactDOM from "react-dom";


import Ques from "./components/Ques.js";
import "./style.css";


function App() {
  return (
    <div className="App">
      <Ques />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
