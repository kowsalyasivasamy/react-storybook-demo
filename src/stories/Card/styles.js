import styled from "styled-components";
import CardReact from "react-bootstrap/Card";

const CardContainer = styled(CardReact)`
  &.card {
    font-family: var(--font_family_general);
    overflow: hidden;
    width: ${props => props.width};
    height: ${props => props.height};
    color: ${props => props.text};
    background-color: ${props => props.bg};
    border: 1px solid ${props => props.border};
    border-radius: ${props => props.borderradius};
  }
`;

CardContainer.Body = styled(CardReact.Body)`
  height: 100%;
  padding: 12px;
  font-family: var(--font_family_general);
`

CardContainer.Header = styled(CardReact.Header)`
   padding: 10px;
   font-family: var(--font_family_bold);
   background-color: ${props => props.bg};
   border-bottom: 1px solid ${props => props.border};
`

CardContainer.Footer = styled(CardReact.Footer)`
  font-family: var(--font_family_general);
  background-color: ${props => props.bg};
  border-top: 1px solid ${props => props.border};
`

CardContainer.Title = styled(CardReact.Title)`
  font-family: var(--font_family_bold);
`

CardContainer.Subtitle = styled(CardReact.Subtitle)`
  font-family: var(--font_family_general);
`

CardContainer.Text = styled(CardReact.Text)`
  font-family: var(--font_family_general);
`

CardContainer.Link = styled(CardReact.Link)`
  font-family: var(--font_family_general);
  color: var(--info);
`

export default CardContainer;
