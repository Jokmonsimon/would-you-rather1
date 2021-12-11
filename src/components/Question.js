import React from "react";
import "./Question.css";
import moment from "moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Question = ({ question, author }) => {
  return (
    <div className="main__body">
      <div className="user__asks">{`${author.name} asks...`}</div>
      <div className="questions__content">
        <div className="player__image">
          <img src={author.avatarURL} alt="" />
        </div>
        <div className="player__box">
          <span className="date">
            {moment(question.timestamp).format("DD/MM/YYYY")}
          </span>
          <div className="quiz">Would you rather...</div>
          <div>
            <Link to={`/questions/${question.id}`}>
              <button className="submit__button">View Poll</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    timestamp: PropTypes.number,
    id: PropTypes.string,
  }),
  author: PropTypes.shape({
    name: PropTypes.string,
    avatarURL: PropTypes.string,
  }),
};

export default Question;
