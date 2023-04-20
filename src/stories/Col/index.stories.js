import React from "react";

import Col from "./index";

const Template = ({ ...args }) => (
  <div className="row">
    <Col {...args}>Col 1</Col>
    <Col {...args}>Col 2</Col>
    <Col {...args}>Col 3</Col>
  </div>
);

const component = {
  title: "Col",
  component: Col,
  tags: ["autodocs"],
  argTypes: {
    xl: {
      control: "number",
      description:
        "The number of columns to span on extra large devices (≥1200px)",
      name: "xl",
    },
    lg: {
      control: "number",
      description: "The number of columns to span on large devices (≥992px)",
      name: "lg",
    },
    md: {
      control: "number",
      description: "The number of columns to span on medium devices (≥768px)",
      name: "md",
    },
    sm: {
      control: "number",
      description: "The number of columns to span on small devices (≥576px)",
      name: "sm",
    },
    xs: {
      control: "number",
      description:
        "The number of columns to span on extra small devices (<576px)",
      name: "xs",
    },
    children: { control: false, description: "Content to be displayed." },
  },
};

export default component;

export const Default = Template.bind({});
