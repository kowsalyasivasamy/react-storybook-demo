import React from 'react'
import PropTypes from 'prop-types'

import ColContainer from './styles'

const Col = (props) => {
  const args = {
    ...props
  }

  delete args.children

  return <ColContainer {...args}>{props.children}</ColContainer>
}

const colSize = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.oneOf(['auto'])
])
const stringOrNumber = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string
])
const column = PropTypes.oneOfType([
  colSize,
  PropTypes.shape({
    size: colSize,
    order: stringOrNumber,
    offset: stringOrNumber
  })
])

Col.propTypes = {
  xl: column,
  lg: column,
  md: column,
  sm: column,
  xs: column,
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ])
}

Col.defaultProps = {
  sm: 4
}

export default Col
