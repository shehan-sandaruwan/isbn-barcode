import React, { useState } from "react";
import PropTypes from "prop-types";

import { CLEAR, ENTER_NUMBER, GENERATE } from "../constant";

const InputForm = ({ onGenerateValidISBN }) => {
  const [ISBNNumber, setISBNNumber] = useState("");

  const onClearInput = () => {
    setISBNNumber("");
  };

  const onChangeNumber = (event) => {
    setISBNNumber(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="form-wrapper">
        <h1>{ENTER_NUMBER}</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onGenerateValidISBN(event);
            onClearInput();
          }}
        >
          <input
            id="isbn-number"
            name="isbn-number"
            type="number"
            required
            onChange={onChangeNumber}
            value={ISBNNumber}
          />
          <div className="form-action">
            <button type="submit">{GENERATE}</button>
            <button onClick={onClearInput}>{CLEAR}</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

InputForm.propTypes = {
  onGenerateValidISBN: PropTypes.func.isRequired,
};

export default InputForm;
