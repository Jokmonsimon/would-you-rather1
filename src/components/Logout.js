import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { logOut } from "../redux/actions/login";

const Logout = ({ history }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(logOut()).then(() => history.push("/"));
  }, [dispatch, history]);

  return (
    <div>
      <div>Logout page</div>
    </div>
  );
};

Logout.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }),
};

export default Logout;
