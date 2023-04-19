import React from 'react'
import Button from '../Button/Button'
// import Checkbox from '../../../Checkbox'
import Col from '../Col'

const props = {
  title: 'Title',
  size: 'lg',
  footer: (
    <>
      <Col lg={5} sm={12} className="d-flex align-center">
        <Button label="Cancel"/>
      </Col>
      <Col lg={7} sm={12} className="d-flex align-center">
        <Button label="I Accept" primary={true}/>
      </Col>
    </>
  ),
  show: true,
  keyboard: false,
  onEnter: () =>
    global.console.log(
      'onEnter event. Callback fired before the Modal transitions in.'
    ),
  onEntered: () =>
    global.console.log(
      'onEntered event. Callback fired after the Modal finishes transitioning in.'
    ),
  onEntering: () =>
    global.console.log(
      'onEntering event. Callback fired as the Modal begins to transition in.'
    ),
  onEscapeKeyDown: () =>
    global.console.log(
      'onEscapeKeyDown event. A callback fired when the escape key, if specified in keyboard, is pressed.'
    ),
  onExit: () =>
    global.console.log(
      'onExit event. Callback fired right before the Modal transitions out.'
    ),
  onExited: () =>
    global.console.log(
      'onExit event. Callback fired after the Modal finishes transitioning out.'
    ),
  onExiting: () =>
    global.console.log(
      'onExiting event. Callback fired as the Modal begins to transition out.'
    ),
  onHide: () =>
    global.console.log(
      'onHide event. A callback fired when the header closeButton or non-static backdrop is clicked. Required if either are specified.'
    ),
  onShow: () =>
    global.console.log('onExit event. A callback fired when the Modal is opening.')
}

export default props
