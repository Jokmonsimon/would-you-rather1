import React from "react";
import serializeForm from "form-serialize";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { saveQuestion } from "../redux/actions/question";

const NewQuestion = ({ user, history }) => {
  const dispatch = useDispatch();
  const { requesting } = useSelector((state) => state.questions);
  const [error, setError] = React.useState({});

  /**
   * Clears the error message from text input
   * @param {*} event
   */
  const onChange = (event) => {
    const { name } = event.target;
    const errors = { ...error };
    delete errors[name];
    setError(errors);
  };

  /**
   * Submits the form data
   * @param {*} event
   * @returns
   */
  const onSubmit = (event) => {
    event.preventDefault();
    const values = serializeForm(event.target, { hash: true });
    if (!values.optionOneText || values.optionOneText.trim() === "") {
      setError({
        ...error,
        optionOneText: "Option one text is required.",
      });
      return;
    }
    if (!values.optionTwoText || values.optionTwoText.trim() === "") {
      setError({
        ...error,
        optionTwoText: "Option two text is required.",
      });
      return;
    }
    dispatch(
      saveQuestion({
        ...values,
        author: user,
      })
    ).then(() => history.push("/home"));
  };

  return (
    <div className="main-content">
      <div
        className="bold p-3 rounded-top"
        style={{
          borderBottom: "solid 1px rgba(0, 0, 0, 0.15)",
          backgroundColor: "#f2f2f2",
          margin: "-9px",
        }}
      >
        Create New Qestion
      </div>
      <div className="align-left">
        <form onSubmit={onSubmit}>
          <div className="pb-2 pt-4">Complete the question</div>
          <div className="bold pt-2 pb-2">Would you rather ...</div>
          <div style={{ textAlign: "center" }}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter option one"
                name="optionOneText"
                onChange={(event) => onChange(event)}
              />
            </div>
            {error.optionOneText && (
              <div className="text-danger align-left">
                {error.optionOneText}
              </div>
            )}
            <div className="mb-3 mt-3">OR</div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter option two"
                name="optionTwoText"
                onChange={(event) => onChange(event)}
              />
            </div>
            {error.optionTwoText && (
              <div className="text-danger align-left">
                {error.optionTwoText}
              </div>
            )}
            <div className="mt-2">
              <button className="btn btn-primary w-100" disabled={requesting}>
                {requesting ? <div className="spinner-border" /> : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

NewQuestion.propTypes = {
  user: PropTypes.string.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }),
};

export default NewQuestion;
