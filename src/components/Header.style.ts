import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100vw;
  min-width: 960px;
  display: flex;
  flex-direction: column;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #f2f5f7;
`;

export const HeaderTopContents = styled.header`
  width: 100%;
  height: 36px;
  display: flex; 
  align-items: center;
  border-bottom: 1px solid #f2f5f7;
`;

export const HeaderTopItemsWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderTopItems = styled.div`
  display: flex;
  align-content: center;
`;

export const HeaderTopItem = styled.p`
  margin: 0 0 0 25px;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.12px;
  text-align: right;
`;

export const HeaderBottomContents = styled.header`
  width: 100%;
  height: 70px;
  display: flex; 
  align-items: center;
`;

export const HeaderBottomItemsWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 56px;
  height: 30px;
  object-fit: contain;
`;
export const AuthItems = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthItem = styled.div`
  height: 20px;
  margin: 0 0 0 25px;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.13px;
`;
