import React, { useState } from "react";
import "./App.css";
import InputForm from "./component/InputForm";
import ValidISBNNumber from "./component/ValidISBNNumber";
import { isbnGenerator } from "./generateValidISBN";

const App = () => {
  const [validatedNumber, setValidatedNumber] = useState(0);
  const [ISBNNumber, setISBNNumber] = useState("");

  const onChangeNumber = (event) => {
    setISBNNumber(event.target.value);
  };

  const onGenerateValidISBN = (event) => {
    const number = isbnGenerator(event.target["isbn-number"].value);

    setValidatedNumber(number.toString());
  };

  const onClearAllHandler = (event) => {
    event.preventDefault();
    setValidatedNumber(0);
    setISBNNumber("");
  };

  return (
    <div className="App">
      <InputForm
        onGenerateValidISBN={onGenerateValidISBN}
        onClearAllHandler={onClearAllHandler}
        onChangeNumber={onChangeNumber}
        ISBNNumber={ISBNNumber}
      />
      <ValidISBNNumber value={validatedNumber} />
    </div>
  );
};

export default App;
