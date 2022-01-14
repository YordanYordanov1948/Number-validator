import "./App.css";
import React, { useState, useMemo } from "react";

function App() {
  const [text, setText] = useState("");

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const isNumber = useMemo(() => {
    const regex = /^\d+$/;
    return regex.test(text);
  }, [text]);

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text}
          onChange={onChangeHandler}
        />
        {isNumber ? (
          <span className="icon is-small is-right">
            <i className="fas fa-check" />
          </span>
        ) : (
          <span className="icon is-small is-right">
            <i className="fas fa-times" />{" "}
          </span>
        )}
      </div>
    </div>
  );
}

export default App;
