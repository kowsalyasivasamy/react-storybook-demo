import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { SIZES_INPUTS, THEMES_INPUTS } from '../constants'
import InputContainer from './styles'

export const Input = forwardRef(({ size, theme, rounded, type, name, disabled, ...props }, ref) => {
  const css = {
    ...SIZES_INPUTS[`${size}`],
    ...THEMES_INPUTS[`${theme}`],
    rounded
  }

  return (
    <InputContainer
      {...css}
      type={type}
      ref={ref}
      name={name}
      aria-label={`${name}Input`}
      disabled={disabled}
      {...props}
    />
  )
})

Input.propTypes = {
  theme: PropTypes.oneOf(Object.keys(THEMES_INPUTS)),
  size: PropTypes.oneOf(Object.keys(SIZES_INPUTS)),
  rounded: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool
}

Input.displayName = 'Input'

Input.defaultProps = {
  theme: 'default',
  size: 'md',
  rounded: false,
  type: 'text',
  name: 'text',
  disabled: false
}

export default Input
