import styled from "styled-components";
import CardReact from "react-bootstrap/Card";

const CardContainer = styled(CardReact)`
  &.card {
    overflow: hidden;
    padding: 10px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.text};
    background-color: ${(props) => props.bg};
    border: 1px solid ${(props) => props.border};
    border-radius: ${(props) => props.borderradius};
  }
`;

export default CardContainer;
