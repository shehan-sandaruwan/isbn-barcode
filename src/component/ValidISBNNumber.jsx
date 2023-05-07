import React from "react";
import { COMPLETE_ISBN } from "../constant";
import PropTypes from "prop-types";

const ValidISBNNumber = ({ value }) => {
  return (
    <div>
      <span>{COMPLETE_ISBN}</span>
      <span>{value}</span>
    </div>
  );
};

ValidISBNNumber.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ValidISBNNumber;
