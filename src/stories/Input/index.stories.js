import React from 'react'

import Input from './index'
import props from './props'
import { SIZES_INPUTS, THEMES_INPUTS } from '../constants'

const component = {
  title: 'Input',
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: 'select',
      options: Object.keys(SIZES_INPUTS),
      name: 'size',
      defaultValue: 'md'
    },
    theme: {
      control: 'select',
      options: Object.keys(THEMES_INPUTS),
      name: 'Theme',
      defaultValue: 'default'
    },
    rounded: {
      control: 'boolean',
      name: 'rounded',
      description: 'When Rounded is true, border-radius will be 30px else 6px',
      defaultValue: false
    },
    type: {
      control: 'text',
      name: 'type',
      description: 'Type of Input',
      defaultValue: 'text'
    },
    name: {
      control: 'text',
      name: 'name',
      description: 'Name of the Input (name used for forms)',
      defaultValue: 'text'
    },
    disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'To disable the input',
      defaultValue: false
    }
  }
}

export default component


const Template = ({ ...args }) => <Input {...args} />

export const Default = Template.bind({})

export const InputRounded = Template.bind({})
InputRounded.args = {
  ...props.roundedInputProps
}

export const InputNumber = Template.bind({})
InputNumber.args = {
  ...props.inputNumberProps
}

export const InputPassword = Template.bind({})
InputPassword.args = {
  ...props.inputPasswordProps
}
