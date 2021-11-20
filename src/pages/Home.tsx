import React, { useContext, useRef, useState, createContext } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

export const Home: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1 onClick={() => history.push("/material")}>materialUI</h1>
      <h1 onClick={() => history.push("/reactBootstrap")}>React Bootstrap</h1>
      <h1 onClick={() => history.push("/chakra")}>Chakra UI</h1>
      <h1 onClick={() => history.push("/bluePrint")}>BluePrint</h1>
      <h1 onClick={() => history.push("/Chakra")}>fdasfdsfsd</h1>
    </>
  );
};
const Wrapper = styled.div`
  background: #fafafd;
  min-height: 100vh;
`;
