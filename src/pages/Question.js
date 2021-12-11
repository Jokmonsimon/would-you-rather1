import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import Poll from "../components/Poll";
import isEmpty from "../utils/isEmpty";
import NotFound from "../components/404";

const Question = ({ match, user }) => {
  const { question_id } = match.params;
  const question = useSelector((state) =>
    state.questions && state.questions.questions
      ? state.questions.questions[question_id] ?? {}
      : {}
  );

  const author = useSelector((state) =>
    state.users && state.users.users
      ? state.users.users[question.author] ?? {}
      : {}
  );

  /**
   * Checks if a question has been answered by the
   * current user
   * @returns
   */
  const answered = () => {
    if (!isEmpty(question)) {
      return [
        ...question.optionOne.votes,
        ...question.optionTwo.votes,
      ].includes(user)
        ? true
        : false;
    }
    return false;
  };

  return (
    <div className="main-content">
      {isEmpty(question) ? (
        <NotFound label="Poll not found" />
      ) : (
        <Poll
          question={question}
          author={author}
          answered={answered}
          user={user}
          questionId={question_id}
        />
      )}
    </div>
  );
};

Question.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      question_id: PropTypes.string,
    }),
  }),
  location: PropTypes.shape({ search: PropTypes.string }),
  user: PropTypes.string.isRequired,
};

export default Question;
