import React from 'react';
import styled from 'styled-components';

const Navigation = (props) => {
  const loginHandler = e => {
      console.log('login button clicked');
  };

  return (
    <NavContainer>
        <h1>PickOut</h1>
        <input />
        <LoginBtn onClick={loginHandler}>로그인</LoginBtn>
    </NavContainer>
  )
}

const NavContainer = styled.div`
    width: auto;
    height: 1.5rem;
    background-color: #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`
const LoginBtn = styled.button`
    width: 3.75rem;
    height: 1.5rem;
`;


export default Navigation;