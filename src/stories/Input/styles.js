import styled from 'styled-components'

const InputContainer = styled.input`
  background-color: var(--level0);
  width: 100%;
  height: ${(props) => `${props.height}px`};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: ${(props) => props.rounded ? '30px' : '6px'};
  font-family: var(--font_family_general);
  color: var(--main);
  font-size: ${(props) => `${props.fontSize}px`};
  line-height: 17px;
  padding: 11px 16px 11px 12px;
  outline: 0;
  box-shadow: none;
  border-bottom: 1px solid ${(props) => props.borderColor};

  &:focus {
    box-shadow: ${(props) => props.shadow};
    outline: var(--shadow);
  }

  &:disabled {
    cursor: no-drop;
    opacity: 0.3;
    border: 1px solid;
    border-color: var(--lines_disabled);
    background-color: var(--level0);

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  &::placeholder {
    color: var(--lines_disabled);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--level0) inset;
    box-shadow: 0 0 0px 1000px var(--level0) inset;
    -webkit-text-fill-color: var(--main);
    transition: background-color 5000s ease-in-out 0s;
  }
`
export default InputContainer
