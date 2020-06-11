import React, { useState } from "react";
import "./App.css";

import WorksGreat from "./components/WorksGreat";
import DefinitelyBroke from "./components/DefinitelyBroke";

function App() {
  const [textInput, setTextInput] = useState("e.g. Stella");
  return (
    <div className="App">
      <div>
        <h1>
          Why, <code>useEffect()</code>?
        </h1>

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
