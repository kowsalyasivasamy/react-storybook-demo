import React from "react";
import PropTypes from "prop-types";

import Container from "./styles";

const ScrollBar = ({ height, ...props }) => {
  const args = {
    ...props,
  };

  delete args.children;

  return (
    <Container height={height} {...args}>
      {props.children}
    </Container>
  );
};

ScrollBar.propTypes = {
  height: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

ScrollBar.defaultProps = {
  height: 400,
};

export default ScrollBar;
