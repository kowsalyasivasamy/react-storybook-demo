import React from "react";

import Card from "./index";
import Button from "../Button/Button";

const Template = ({ ...args }) => (
  <Card className="mx-auto" {...args}>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle>Card Subtitle</Card.Subtitle>
      <Card.Text>Some example to card text</Card.Text>
      <Button label="Click"></Button>
    </Card.Body>
    <Card.Footer className="text-center">
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Footer>
  </Card>
);

const component = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: "text",
      name: "width",
      description: "width of the card",
    },
    height: {
      control: "text",
      name: "height",
    },
    bgcolor: {
      control: "color",
      name: "bgColor",
    },
    bordercolor: {
      control: "color",
      name: "borderColor",
    },
    textcolor: {
      control: "color",
      name: "textColor",
    },
    borderRadius: {
      control: "text",
      name: "borderRadius",
    },
  },
};

export default component;

export const Default = Template.bind({});
Default.args = {};
