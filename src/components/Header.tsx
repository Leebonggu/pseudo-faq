import React from 'react'
import {
  HeaderContainer,
  HeaderTopContents,
  HeaderTopItemsWrapper,
  HeaderTopItems,
  HeaderTopItem,
  HeaderBottomContents,
  HeaderBottomItemsWrapper,
  Logo,
  AuthItems,
  AuthItem,
} from './Header.style';

console.log(4)
console.log(5)

function Header() {
  return (
    <HeaderContainer>
      <HeaderTopContents>
        <HeaderTopItemsWrapper>
          <HeaderTopItems>
            <HeaderTopItem>한국어</HeaderTopItem>
            <HeaderTopItem>English</HeaderTopItem>
            <HeaderTopItem>Help</HeaderTopItem>
            <HeaderTopItem>F A Q</HeaderTopItem>
          </HeaderTopItems>
        </HeaderTopItemsWrapper>
      </HeaderTopContents>
      <HeaderBottomContents>
        <HeaderBottomItemsWrapper>
          <Logo src="https://img.themoin.com/public/img/logo.svg"/>
          <AuthItems>
            <AuthItem>로그인</AuthItem>
            <AuthItem style={{ color: '#f2f5f7' }}>|</AuthItem>
            <AuthItem>회원가입</AuthItem>
          </AuthItems>
        </HeaderBottomItemsWrapper>
      </HeaderBottomContents>
    </HeaderContainer>
  )
}

export default Header;
