import React from "react";
import "./NewQuestion.css";
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
        optionOneText: "This field is required.",
      });
      return;
    }
    if (!values.optionTwoText || values.optionTwoText.trim() === "") {
      setError({
        ...error,
        optionTwoText: "This field is required.",
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
    <div className="main__container">
      <div className="content">
        <div className="heading">Create New Qestion</div>
        <form onSubmit={onSubmit}>
          <div className="would__you">Would you rather ...</div>
          <div>
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
              <div className="warning">{error.optionOneText}</div>
            )}
            <div className="would__you">OR</div>
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
              <div className="warning">{error.optionTwoText}</div>
            )}
            <button className="submit__button" disabled={requesting}>
              {requesting ? <div className="spinner-border" /> : "Submit"}
            </button>
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
