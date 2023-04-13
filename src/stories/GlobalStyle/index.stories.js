import React from 'react'

import GlobalStyle from './index'

const Template = ({ ...args }) => <GlobalStyle {...args} />

const component = {
  title: 'Global Style',
  component: GlobalStyle,
  argTypes: {
    text: { control: 'text', name: 'Text' },
    onClick: { action: 'clicked' }
  }
}

export default component

export const Default = Template.bind({})
