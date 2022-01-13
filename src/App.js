import "./App.css";
import React, { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState("");

  const onChangeHandler = (event) => {
    setNumber(event.target.value);
    console.log(number);
  };

  const Number = useMemo(() => {
    if (number == 1) {
      return (
        <span className="icon is-small is-right">
          <i className="fas fa-times" />
        </span>
      );
    }
  });

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={number}
          onChange={onChangeHandler}
        />
        <span className="icon is-small is-right">
          <i className="fas fa-times" />
        </span>
      </div>
    </div>
  );
}

export default App;
