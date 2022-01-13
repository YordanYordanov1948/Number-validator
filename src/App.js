import "./App.css";
import React, { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <span className="icon is-small is-right">
          <i className="fas fa-times" />
        </span>
      </div>
    </div>
  );
}

export default App;
