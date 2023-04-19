import styled from 'styled-components'
import ModalReact from 'react-bootstrap/Modal'

const SIZES_SMALL = ['xs', 'sm']

const ModalContainer = styled(ModalReact)`
  padding: 0 !important;

  .modal {
    &-content{
      background-color: var(--level0);
    }
    &-dialog{
      max-width: ${props => `${props.width}px`};
      margin: auto !important;
    }
    &-header {
      height: 86px;
      border-bottom-color: var(--lines_disabled);
      border-bottom-width: ${props => props['border-header'] === 'true' ? '1px' : '0'};

      &.header-without-title {
        height: 40px;
      }

      .btn-close {
        position: absolute;
        left: calc(100% - 45px);
        top: 20px;
        opacity: 1;
        outline: none;
        visibility: hidden;

        &:focus {
          box-shadow: none;
        }

        &:focus-visible {
          outline: none;
        }

        &:hover {
          opacity: 0.5;
        }
        
        &::after {
          content: url(${(props) => props['icon-close']});
          width: 18px;
          height: 18px;
          position: relative;
          right: 0px;
          visibility: visible;
        }
      }
    }

    &-title {
      width: calc(100% - 40px);
      margin: auto;
      align-self: center;
      font-family: var(--font_family_bold);
      font-style: normal;
      font-weight: 350;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: var(--secondary);
    }

    &-content {
      border-radius: 20px;
    }

    &-footer {
      min-height: 130px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: ${props => SIZES_SMALL.includes(props.size) ? 'column' : 'row'};
      flex-wrap: initial;
      border-top: none;

      > * {
        flex: 0 0 ${props => SIZES_SMALL.includes(props.size) ? '100%' : 'initial'};
        max-width: ${props => SIZES_SMALL.includes(props.size) ? '100%' : 'initial'};
      }
    }
  }
`

export default ModalContainer
