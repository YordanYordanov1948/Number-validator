import "./App.css";
import React, { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const onChange = (e) => {
    setNumber(e.currentTarget.value);
    console.log(number);
  };

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={number}
          onChange={onChange}
        />
        <span className="icon is-small is-right">
          <i className="fas fa-times" />
        </span>
      </div>
    </div>
  );
}

export default App;
