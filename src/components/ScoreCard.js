import React from "react";
import "./ScoreCard.css";
import PropTypes from "prop-types";

const ScoreCard = ({ user }) => {
  return (
    <div className="body__content">
      <div className="user__container">
        <img
          src={user.avatarURL}
          alt=""
          className="user__image"
        />
      </div>
      <div className="question__content">
        <div className="user__name">
          <h5>{user.name}</h5>
        </div>
        <div className="answered__qtns">
          <div>Answered questions</div>
          <div className="questions">{user.totalAnswered}</div>
        </div>
        <div className="created__qtns">
          <div>Created questions</div>
          <div className="question">{user.totalQuestions}</div>
        </div>
      </div>
      
        <div className="score__body">
          <div className="score__card">Scores</div>
          <div className="score__points">
            {user.totalAnswered + user.totalQuestions}
          </div>
        </div>
    </div>
  );
};

ScoreCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatarURL: PropTypes.string,
    totalAnswered: PropTypes.number,
    totalQuestions: PropTypes.number,
  }),
};

export default ScoreCard;
