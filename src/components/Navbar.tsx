import React from "react";

import { styled } from "styled-components";

const Nav = styled.div`
  height: 10vh;
  background-color: #000000;
  padding: 0;
  margin: 0;
  list-style: none;
  border: 0;
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  gap: 15px;
  justify-content: space-center;
  align-items: center;
`;

const Section = styled.a`
  color: white;
  font-size: 16px;
  font-family: sans-serif;
  flex-grow: 0;

  &:hover {
    height: 20px;
    cursor: pointer;
    color: red;
    font-family: sans-serif;
  }
`;

const Logo = styled.h1`
  color: white;
  font-family: sans-serif;
  font-size: 24px;
  margin-left: 50px;

  &:hover {
    height: 24px;
    cursor: pointer;
    color: red;
    font-family: sans-serif;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo>Youtube Project</Logo>
      <Section>Tela Inicial</Section>
      <Section>Canais</Section>
      <Section>Categoria de Vídeos</Section>
    </Nav>
  );
};

export default Navbar;
