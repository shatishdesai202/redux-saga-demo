import React from "react";

const Button = ({ children, loading, ...props }) => {
  return (
    <button disabled={loading} {...props}>
      {loading ? "Loading..." : children}
    </button>
  );
};

Button.defaultProps = {
  loading: false,
};
export default Button;
