const props = {
  defaultProps: {
    theme: 'default',
    size: 'sm',
    name: 'firstName'
  },
  roundedInputProps: {
    theme: 'success',
    size: 'md',
    name: 'firstName',
    rounded: true
  },
  inputNumberProps: {
    theme: 'danger',
    size: 'lg',
    type: 'number',
    name: 'amount'
  },
  inputPasswordProps: {
    theme: 'warning',
    size: 'md',
    type: 'password',
    name: 'password'
  }
}

export default props
