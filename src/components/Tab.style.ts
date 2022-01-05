import styled from "styled-components";

interface SelectProps {
  selected: boolean;
}

export const FaqTab = styled.div<SelectProps>`
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid black;
  cursor: pointer;
  color: ${props => props.selected ? 'black' : '#24242480'};
`;

export const WhiteBar = styled.div`
  width: 138px;
  height: 5px;
  background-color: white;
  position: absolute;
  bottom: -5px;
  z-index: 1;
`