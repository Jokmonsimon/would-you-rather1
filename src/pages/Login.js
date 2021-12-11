import React from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { loginUser } from "../redux/actions/login";
import { Link } from "react-router-dom";

const Login = ({ history, location }) => {
  const [selectedItem, setSelectedItem] = React.useState({
    name: "Select User",
  });
  const { user } = useSelector((state) => state.authUser);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const { referrer } = location && location.state ? location.state : "";
    if (user) {
      referrer ? history.push(referrer) : history.push("/home");
    }
  });

  const onSubmit = () => {
    dispatch(loginUser(selectedItem.id));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="/images/wyr.png"
          alt="Would You Rather Logo"
        />
      </Link>
      <div className="login__container">
        <h3>Hello, welcome to this Game!</h3>
        <h5>
          To play, Select User or <Link to="/register">Create Account</Link>
        </h5>
        <Dropdown>
          <Dropdown.Toggle
            variant="transparent"
            className="dropdown__select__user"
          >
            {selectedItem.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {users
              ? Object.entries(users).map(([key, value]) => {
                  return (
                    <Dropdown.Item
                      key={key}
                      onClick={() => setSelectedItem(value)}
                    >
                      {value.name}
                    </Dropdown.Item>
                  );
                })
              : null}
          </Dropdown.Menu>
        </Dropdown>
        <Button className="sign-in" variant="success" onClick={onSubmit}>
          Enter
        </Button>
      </div>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }),
  location: PropTypes.shape({
    state: PropTypes.shape({ referrer: PropTypes.string }),
    search: PropTypes.string,
  }),
};

export default Login;
