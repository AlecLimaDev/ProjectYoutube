import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cabecalho = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  text-align: center;

  font-family: sans-serif;
  width: 100%;

  margin-top: 50%;
  height: 20vh;
  background: black;
`;
const Footer: React.FC = () => {
  return (
    <>
      <Cabecalho>
        <Link to="/Home">Inicio</Link>
        <Link to="/channels">Canais</Link>
        <Link to={"https://www.linkedin.com/in/aleclima-/"} target="_blank">
          Linkedin do Desenvolvedor
        </Link>
        <Link to={"https://github.com/AlecLimaDev"} target="_blank">
          GitHub
        </Link>
      </Cabecalho>
    </>
  );
};
export default Footer;
