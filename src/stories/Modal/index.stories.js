import React from "react";

import Modal from "./index";
import ScrollBar from "../ScrollBar";

import { SIZES_MODAL } from "../constants";
import props from "./props";

const Template = ({ ...args }) => (
  <Modal {...args}>
    <ScrollBar height={415}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </ScrollBar>
  </Modal>
);

const component = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", name: "title" },
    size: {
      control: {
        type: "select",
        options: Object.keys(SIZES_MODAL),
      },
      name: "size",
    },
    show: {
      control: "boolean",
      name: "show",
      description: "Show and hide the modal.",
    },
    keyboard: {
      control: "boolean",
      name: "keyboard",
      description: "Close the modal when escape key is pressed.",
    },
    closeButton: {
      control: "boolean",
      name: "closeButton",
      description: "Show close button.",
    },
    onEnter: {
      control: false,
      description: "Callback fired before the Modal transitions in.",
    },
    onEntered: {
      control: false,
      description: "Callback fired after the Modal finishes transitioning in.",
    },
    onEntering: {
      control: false,
      description: "Callback fired as the Modal begins to transition in.",
    },
    onEscapeKeyDown: {
      control: false,
      description:
        'A callback fired when the escape key, if specified in "keyboard", is pressed.',
    },
    onExit: {
      control: false,
      description: "Callback fired right before the Modal transitions out.",
    },
    onExited: {
      control: false,
      description: "Callback fired after the Modal finishes transitioning out.",
    },
    onExiting: {
      control: false,
      description: "Callback fired as the Modal begins to transition out.",
    },
    onHide: {
      control: false,
      description:
        "A callback fired when the header closeButton or non-static backdrop is clicked. Required if either are specified.",
    },
    onShow: {
      control: false,
      description: "A callback fired when the Modal is opening.",
    },
    children: { control: false, description: "Some content to be shown." },
    footer: {
      description:
        "React component element to display in the footer of the modal.",
    },
    centered: {
      control: "boolean",
      description: "Center the modal on the screen",
    },
  },
};

export default component;

export const Default = Template.bind({});

delete props.onEnter;
delete props.onEntered;
delete props.onEntering;
delete props.onEscapeKeyDown;
delete props.onExit;
delete props.onExited;
delete props.onExiting;
delete props.onHide;
delete props.onShow;

Default.args = {
  ...props,
};
