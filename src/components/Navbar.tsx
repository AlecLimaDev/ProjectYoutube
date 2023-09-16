import React from "react";
import { Link } from "react-router-dom";

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
  font-family: sans-serif;
  text-decoration: none;
  list-style: none;

  &:hover {
    height: 20px;
    cursor: pointer;
    color: red;
    font-family: sans-serif;
  }
`;

const Logo = styled.h1`
  color: red;
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
      <Link to="/Home">
        <Section>Tela Inicial</Section>
      </Link>
      <Link to="/Channels">
        <Section>Canais</Section>
      </Link>
      <Link to="/categoryTheVIdeos">
        <Section>Categoria de Vídeos</Section>
      </Link>
    </Nav>
  );
};

export default Navbar;
