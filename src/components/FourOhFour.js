import { Link } from "react-router-dom";
import React from "react";

const FourOhFour = () => {
  return (
    <div id="fourOhFour">
      <h1>
        404 page not found{" "}
        <span role="img" aria-label="loud-crying">
          😭
        </span>
      </h1>
      <Link to="/">
        <h2>Home</h2>
      </Link>
    </div>
  );
};

export default FourOhFour;
