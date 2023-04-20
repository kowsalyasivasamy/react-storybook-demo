import React from "react";

import ScrollBar from "./index";

const Template = ({ ...args }) => (
  <ScrollBar {...args} style={{ width: "300px", margin: "auto" }}>
    <div style={{ height: "500px" }}>
      <h4 className="display-4">Example</h4>
    </div>
  </ScrollBar>
);

const component = {
  title: "Scroll Bar",
  component: ScrollBar,
  tags: ["autodocs"],
  argTypes: {
    height: {
      control: "numeric",
      name: "height",
      description:
        "Height in pixeles of the container that will display the scroll.",
    },
  },
};

export default component;

export const Default = Template.bind({});
