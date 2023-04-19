import styled, { css } from 'styled-components'

export const styleScrollbar = css`
  /* width */
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* track */
  &::-webkit-scrollbar-track {
    box-shadow: var(--inset);
    border-radius: 10px;
    margin-top: 2px;
    margin-bottom: 2px;
  }

  /* handle */
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: black;
  }

  /* hover */
  &:hover {
    &::-webkit-scrollbar-thumb {
      box-shadow: var(--shadow);
    }
  }

  /* focus */
  &:focus {
    &::-webkit-scrollbar-thumb {
      box-shadow: none;
    }
  }

  /* active */
  &:active {
    &::-webkit-scrollbar-track {
      border: 1px solid black;
    }
  }
`

const ScrollBarContainer = styled.div`
  width: 100%;
  max-height: ${(props) => `${props.height}px`} !important;
  overflow-y: auto;
  overflow-x: hidden;

  ${styleScrollbar}
`

export default ScrollBarContainer
