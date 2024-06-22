import React from 'react';
import { HeaderContainer, Title, Description } from './styles/HeaderStyles';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Stock Market Dashboard</Title>
      <Description>Interactive dashboard displaying stock market trends and data.</Description>
    </HeaderContainer>
  );
};

export default Header;
