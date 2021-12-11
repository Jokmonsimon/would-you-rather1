import React from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { getUsers } from "./redux/actions/user";
import { getQuestions } from "./redux/actions/question";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Question from "./pages/Question";
import LeaderBoard from "./pages/LeaderBoard";
import NotFoundPage from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import NewQuestion from "./pages/NewQuestion";
import NavBar from "./components/NavBar";
import Logout from "./components/Logout";
import Register from "./pages/Register";

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authUser);

  React.useEffect(() => {
    dispatch(getUsers());
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <div className="App">
      <Route
        path={["/home", "/add", "/leaderboard", "/questions/:question_id"]}
        render={(props) => <NavBar {...props} user={user} />}
      />
      <Switch>
        <Route exact path="/" render={(props) => <Login {...props} />} />
        <ProtectedRoute exact path="/home" component={Home} />
        <ProtectedRoute exact path="/add" component={NewQuestion} />
        <ProtectedRoute exact path="/leaderboard" component={LeaderBoard} />
        <ProtectedRoute
          exact
          path="/questions/:question_id"
          component={Question}
        />
        <ProtectedRoute exact path="/logout" component={Logout} />
        <Route exact path="/register" component={Register} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
