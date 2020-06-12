import React, { useState } from "react";
import "./App.css";

import WorksGreat from "./components/WorksGreat";
import DefinitelyBroke from "./components/DefinitelyBroke";

function App() {
  const [textInput, setTextInput] = useState("e.g. Stella");
  return (
    <div className="App">
      <div>
        <h1>What's the bug?</h1>
        <p className="App__answer">
          🐛 Answer{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tyreer/learning-notes/blob/master/Egghead_simplify-react-apps-with-react-hooks.md#demo"
          >
            here
          </a>
          🐛
        </p>

        <label htmlFor="title">What's a good name for a beer?</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
        />
      </div>
      <WorksGreat textInput={textInput} />
      <DefinitelyBroke textInput={textInput} />
    </div>
  );
}

export default App;
