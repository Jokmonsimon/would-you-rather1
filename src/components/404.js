import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NotFound = ({ label }) => {
  return (
    <div>
      <div className="bold pt-3 pb-3">
        <h4>{label}</h4>
      </div>
      <div className="mb-3">
        <Link to="/home">
          <button className="btn btn-primary">Back to dashboard</button>
        </Link>
      </div>
    </div>
  );
};

NotFound.propTypes = {
  label: PropTypes.string.isRequired,
};

export default NotFound;
