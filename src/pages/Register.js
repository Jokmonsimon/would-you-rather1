import React from "react";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import serializeForm from "form-serialize";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { addUser } from "../redux/actions/user";

const Register = ({ history }) => {
  const [error, setError] = React.useState({});
  const [image, setImage] = React.useState("");
  const { registering } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const onChange = (event) => {
    const { name } = event.target;
    const errors = { ...error };
    delete errors[name];
    setError(errors);
  };

  const onPickImage = (event) => {
    const { files } = event.target;
    if (files && files[0]) {
      setImage(URL.createObjectURL(files[0]));
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const values = serializeForm(event.target, { hash: true });
    if (!values.name || values.name.trim() === "") {
      setError({
        ...error,
        name: "Full name is required.",
      });
      return;
    }
    if (!image) {
      setError({
        ...error,
        name: "Profile picture is required.",
      });
      return;
    }
    values.avatarURL = image;
    dispatch(addUser(values)).then(() => history.replace("/"));
  };

  return (
    <div className="register">
      <Link to="/register">
        <img
          className="register__logo"
          src="/images/wyr.png"
          alt="Would You Rather Logo"
        />
      </Link>
      <form className="register__container" onSubmit={onSubmit}>
        <h5 className="register__login">
          Already have an account? <Link to="/">Login</Link>
        </h5>
        <label htmlFor="avatarURL">
          <img
            className="player__image"
            src={image ? image : "images/player.png"}
            alt="Player Image"
          />
        </label>
        <input
          className="choose__player"
          type="file"
          name="avatarURL"
          id="avatarURL"
          onChange={onPickImage}
        />

        {error.name && (
          <div className="text-danger align-left mb-3">{error.name}</div>
        )}
        <div className="">
          <input
            type="text"
            name="name"
            className=""
            placeholder="Enter Full Name"
            onChange={(event) => onChange(event)}
          />
        </div>
        <div className="mt-2">
          <button className="create__account" disabled={registering}>
            {registering ? (
              <div className="spinner-border" />
            ) : (
              "Create Account"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  history: PropTypes.shape({ replace: PropTypes.func }),
};

export default Register;
