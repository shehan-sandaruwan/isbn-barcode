import React from "react";
import PropTypes from "prop-types";

import { CLEAR, ENTER_NUMBER, GENERATE } from "../constant";

const InputForm = ({
  onGenerateValidISBN,
  onClearAllHandler,
  onChangeNumber,
  ISBNNumber,
}) => {
  return (
    <React.Fragment>
      <div className="form-wrapper">
        <h1>{ENTER_NUMBER}</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onGenerateValidISBN(event);
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
            <button onClick={onClearAllHandler}>{CLEAR}</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

InputForm.propTypes = {
  onGenerateValidISBN: PropTypes.func.isRequired,
  onClearAllHandler: PropTypes.func.isRequired,
  ISBNNumber: PropTypes.string,
  onChangeNumber: PropTypes.func.isRequired,
};

export default InputForm;
