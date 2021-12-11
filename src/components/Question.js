import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Question = ({ question, author }) => {
  return (
    <div
      className="d-flex flex-column border mb-3"
      style={{ borderRadius: "10px", textAlign: "left" }}
    >
      <div
        className="p-3 lead rounded-top"
        style={{ backgroundColor: "#f2f2f2", fontWeight: "600" }}
      >
        {`${author.name} asks:`}
      </div>
      <div className="d-flex flex-row" style={{ alignItems: "center" }}>
        <div className="p-4">
          <img
            src={author.avatarURL}
            alt=""
            className="rounded-circle border"
            style={{ width: "80px", height: "80px" }}
          />
        </div>
        <div
          className="p-3 flex-fill"
          style={{
            borderLeft: "solid thin rgba(0,0,0,.15)",
          }}
        >
          <span className="small font-italic">
            {moment(question.timestamp).format("DD/MM/YYYY")}
          </span>
          <div className="lead" style={{ fontWeight: "600" }}>
            Would you rather...
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Link to={`/questions/${question.id}`}>
              <button className="btn btn-primary w-100">View Poll</button>
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
