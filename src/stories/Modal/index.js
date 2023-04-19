import React, { useState, useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'

import { getThemeMode, svg2Raw, truncate } from '../common'
import { SIZES_MODAL, MEDIA_QUERY, THEMES_MODE } from '../constants'

import iconClose from './assets/icon-close-modal.svgl'
import iconCloseDarkMode from './assets/icon-close-modal-dark-mode.svgl'
import ModalReact from './styles'

export const Modal = ({
  title,
  footer,
  show,
  size,
  closeButton,
  onHide,
  centered,
  ...props
}) => {
  const [showModal, setShowModal] = useState(false)
  const isSmallScreen = useMediaQuery({ query: `(max-width: ${MEDIA_QUERY.lg})` })
  const isXSmallScreen = useMediaQuery({ query: `(max-width: ${MEDIA_QUERY.xs})` })

  useEffect(() => {
    setShowModal(show)
  }, [show])

  const handleClose = () => {
    if (typeof onHide === 'function') {
      onHide()
    }

    setShowModal(false)

    show = false
  }

  const args = {
    'icon-close': getThemeMode() === THEMES_MODE.light ? svg2Raw(iconClose) : svg2Raw(iconCloseDarkMode),
    'border-header': (!!title).toString(),
    ...props
  }

  if (isSmallScreen) {
    size = 'sm'
  }

  if (isXSmallScreen) {
    title = truncate(title, 15)
  }

  const css = {
    ...SIZES_MODAL[`${size}`]
  }

  delete args.children

  return (
    <ModalReact
      size={size}
      show={showModal}
      backdrop={!props.keyboard ? 'static' : true}
      onHide={handleClose}
      centered={centered}
      {...css}
      {...args}>
      {(title || closeButton) && (
        <ModalReact.Header
          className={!title ? 'header-without-title' : ''} aria-label="header-modal" closeButton={closeButton}
        >
          {title && (
            <ModalReact.Title aria-label="title-modal">{title}</ModalReact.Title>
          )}
        </ModalReact.Header>
      )}

      <ModalReact.Body>{props.children}</ModalReact.Body>

      {footer && Object.keys(footer).length > 0 && (
        <ModalReact.Footer aria-label="footer-modal">
          {footer}
        </ModalReact.Footer>
      )}
    </ModalReact>
  )
}

Modal.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object
  ]),
  footer: PropTypes.object,
  size: PropTypes.oneOf(Object.keys(SIZES_MODAL)),
  show: PropTypes.bool,
  closeButton: PropTypes.bool,
  keyboard: PropTypes.bool,
  onHide: PropTypes.func,
  centered: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ]),
}

Modal.defaultProps = {
  footer: null,
  closeButton: true,
  keyboard: false,
  size: 'md',
  centered: true
}

export default memo(Modal)
