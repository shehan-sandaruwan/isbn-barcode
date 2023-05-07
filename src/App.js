import React, { useState } from "react";
import "./App.css";
import InputForm from "./component/InputForm";
import ValidISBNNumber from "./component/ValidISBNNumber";
import { isbnGenerator } from "./generateValidISBN";

function App() {
  const [validatedNumber, setValidatedNumber] = useState(0);

  const onGenerateValidISBN = (event) => {
    const number = isbnGenerator(event.target["isbn-number"].value);

    setValidatedNumber(number.toString());
  };

  return (
    <div className="App">
      <InputForm onGenerateValidISBN={onGenerateValidISBN} />
      <ValidISBNNumber value={validatedNumber} />
    </div>
  );
}

export default App;
