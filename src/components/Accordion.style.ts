import styled from "styled-components";

interface SelectProps {
  selected?: boolean;
}

export const Container = styled.div<SelectProps>`
  width: 100%;
  height: 72px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  color: ${props => props.selected ? '#24242480' : '#242424'};
  cursor: pointer;
  /* transition: height 0.25s linear; */

`;

export const AccodianTitle = styled.h2`
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: -0.15px;
`;

export const AccodianContents = styled.div<{display: boolean}>`
  margin: 30px 0;
  /* TODO: transition */
`;

export const IconWrapper = styled.span<SelectProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => props.selected ? 'rotate(180deg)' : ''};
  transition: all 300ms ease-out;
`;
