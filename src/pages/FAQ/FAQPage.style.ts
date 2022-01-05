import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 960px;
  height:  calc(100vh-106px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 50px 0;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: -0.4px;
  text-align: center;
  color: #242424;
`;
export const InputContainer = styled.div`
  width: 620px;
  margin: 50px 0 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;
  padding-left: 36px;
  border-radius: 6px;
  background-color: rgba(36, 36, 36, 0.04);
  border: none;
  outline: none;
`;

export const Icon = styled.span`
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;