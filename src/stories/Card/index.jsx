import React from "react";
import PropTypes from "prop-types";

import Container from "./styles";

export const Card = ({
  bgcolor,
  bordercolor,
  textcolor,
  borderRadius,
  ...props
}) => {
  const args = {
    ...props,
    bg: bgcolor,
    border: bordercolor,
    text: textcolor,
    borderradius: borderRadius,
  };

  delete args.children;
  delete args.bgcolor;
  delete args.bordercolor;
  delete args.textcolor;
  delete args.borderRadius;

  return <Container {...args}>{props.children}</Container>;
};

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  bgcolor: PropTypes.string,
  bordercolor: PropTypes.string,
  borderRadius: PropTypes.string,
  textcolor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

Card.defaultProps = {
  width: "18rem",
  height: "13rem",
  bgcolor: 'level0',
  bordercolor: 'level0',
  borderRadius: '10px',
  textcolor: 'primary'
};

export default Card;

Card.Body = ({ ...props }) => {
  const args = {
    ...props,
  };

  delete args.children;

  return <Container.Body {...args}>{props.children}</Container.Body>;
};

Card.Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

Card.Body.displayName = "Card.Body";

Card.Header = ({ ...props }) => {
  const args = {
    ...props,
  };

  delete args.children;

  return <Container.Header {...args}>{props.children}</Container.Header>;
};

Card.Header.propTypes = {
  bgcolor: PropTypes.string,
  bordercolor: PropTypes.string,
  textcolor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

Card.Header.defaultProps = {
  bgcolor: "white",
  bordercolor: "blue",
  textcolor: "black",
};

Card.Header.displayName = "Card.Header";

Card.Footer = ({ ...props }) => {
  const args = {
    ...props,
  };

  delete args.children;

  return <Container.Footer {...args}>{props.children}</Container.Footer>;
};

Card.Footer.propTypes = {
  bgcolor: PropTypes.string,
  bordercolor: PropTypes.string,
  textcolor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

Card.Footer.defaultProps = {
  bgcolor: "white",
  bordercolor: "blue",
  textcolor: "black",
};

Card.Footer.displayName = "Card.Footer";

Card.Title = ({ ...props }) => {
  const args = {
    ...props,
  };

  delete args.children;

  return <Container.Title {...args}>{props.children}</Container.Title>;
};

Card.Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

Card.Title.displayName = "Card.Title";

Card.Subtitle = ({ ...props }) => {
  const args = {
    ...props,
  };

  delete args.children;

  return <Container.Subtitle {...args}>{props.children}</Container.Subtitle>;
};

Card.Subtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

Card.Subtitle.displayName = "Card.Subtitle";

Card.Text = ({ ...props }) => {
  const args = {
    ...props,
  };

  delete args.children;

  return <Container.Text {...args}>{props.children}</Container.Text>;
};

Card.Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

Card.Text.displayName = "Card.Text";

Card.Link = ({ ...props }) => {
  const args = {
    ...props,
  };

  delete args.children;

  return <Container.Link {...args}>{props.children}</Container.Link>;
};

Card.Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};

Card.Link.displayName = "Card.Link";
