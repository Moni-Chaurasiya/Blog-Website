//import React from "react";
import PropTypes from "prop-types";

function Logo({ width = "100%" }) {
  return (
    <div
      className="text-3xl italic text-sky-400"
      style={{ width }}
    >{`Blogs`}</div>
  );
}

Logo.propTypes = {
  width: PropTypes.string, // Validate that width is a string
};

export default Logo;
