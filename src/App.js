import React, { useState } from "react";
import logo from "./logo-birthday-app-removebg-preview.png";
import "./App.css";

function App() {
  const [isInputTextFocused, setIsInputTextFocused] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isInputDateFocused, setIsInputDateFocused] = useState(false);
  const [inputDate, setInputDate] = useState("");

  const handleInputTextFocus = () => {
    setIsInputTextFocused(true);
  };

  const handleInputTextBlur = () => {
    if (inputText.length === 0) {
      setIsInputTextFocused(false);
      // Remove focus styles if the input is empty
      document.getElementById("inpFName").classList.remove("input-focus");
      document
        .getElementById("inpFName-lab")
        .classList.remove("input-label-focus");
    }
  };

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleInputDateFocus = () => {
    setIsInputDateFocused(true);
  };

  const handleInputDateBlur = () => {
    if (inputDate.length === 0) {
      setIsInputDateFocused(false);
      // Remove focus styles if the input is empty
      document.getElementById("inpDate").classList.remove("input-focus");
      document
        .getElementById("inpDate-lab")
        .classList.remove("input-label-focus");
    }
  };

  const handleInputDateChange = (event) => {
    setInputDate(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />
      </header>
      <section className="App-section">
        <h1>Capture Birthdays Swiftly</h1>
        <form>
          <div className={`form-element `}>
            <label
              className={`input-label ${
                isInputTextFocused ? "input-label-focus" : ""
              }`}
              id="inpFName-lab"
            >
              Full name
            </label>
            <input
              className={`${isInputTextFocused ? "input-focus" : ""}`}
              type="text"
              name="inpFName"
              id="inpFName"
              onFocus={handleInputTextFocus}
              onBlur={handleInputTextBlur}
              onChange={handleInputTextChange}
            />
          </div>
          <div className="form-element">
            <label
              className={`input-label ${
                isInputDateFocused ? "input-label-focus" : ""
              } ${isInputDateFocused ? " " : "hidden"}`}
              id="inpDate-lab"
            >
              Date of Birth
            </label>
            <input
              className={`${isInputDateFocused ? "input-focus" : ""}`}
              type="date"
              name="inpDate"
              id="inpDate"
              onFocus={handleInputDateFocus}
              onBlur={handleInputDateBlur}
              onChange={handleInputDateChange}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;
