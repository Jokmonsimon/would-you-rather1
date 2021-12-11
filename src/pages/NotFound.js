import React from "react";
import NotFound from "../components/404";

const NotFoundPage = () => {
  return (
    <div className="main-content">
      <NotFound label="The resource you are looking for was not found" />
    </div>
  );
};

export default NotFoundPage;
