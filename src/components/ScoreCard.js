import React from "react";
import PropTypes from "prop-types";

const ScoreCard = ({ user }) => {
  return (
    <div
      className="d-flex flex-row border mb-3 align-left"
      style={{ borderRadius: "10px", alignItems: "center" }}
    >
      <div className="p-4">
        <img
          src={user.avatarURL}
          alt=""
          className="rounded-circle border"
          style={{ width: "80px", height: "80px" }}
        />
      </div>
      <div
        className="p-3 flex-fill"
        style={{
          borderLeft: "solid thin rgba(0, 0, 0, 0.15)",
          borderRight: "solid thin rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="mb-3 mt-2" style={{ fontWeight: "600" }}>
          <h5>{user.name}</h5>
        </div>
        <div
          className="d-flex flex-row mb-2 mt-2 pb-3"
          style={{ borderBottom: "solid thin rgba(0, 0, 0, 0.15)" }}
        >
          <div className="flex-fill">Answered questions</div>
          <div>{user.totalAnswered}</div>
        </div>
        <div className="d-flex flex-row mb-2 mt-2">
          <div className="flex-fill">Created questions</div>
          <div>{user.totalQuestions}</div>
        </div>
      </div>
      <div className="p-3">
        <div className="border rounded d-flex flex-column align-items-center">
          <div
            style={{
              backgroundColor: "#f2f2f2",
              fontWeight: "600",
              borderBottom: "solid thin rgba(0, 0, 0, 0.15)",
              padding: "5px 20px 5px 20px",
            }}
          >
            Score
          </div>
          <div className="pt-3 pb-3">
            <div
              className="border rounded-circle text-center bg-primary text-white bold"
              style={{
                width: "50px",
                height: "50px",
                lineHeight: "50px",
                fontSize: "20px",
              }}
            >
              {user.totalAnswered + user.totalQuestions}
            </div>
          </div>
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
