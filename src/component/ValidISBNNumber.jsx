import React from "react";
import { COMPLETE_ISBN } from "../constant";
import PropTypes from "prop-types";

const ValidISBNNumber = (props) => {
  return (
    <div>
      <span>{COMPLETE_ISBN}</span>
      <span>{props.value}</span>
    </div>
  );
};

ValidISBNNumber.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ValidISBNNumber;
