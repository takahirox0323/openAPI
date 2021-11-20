import React, { useContext, useRef, useState, createContext } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

export const Tailwind: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>chakra</h1>
    </>
  );
};
const Wrapper = styled.div`
  background: #fafafd;
  min-height: 100vh;
`;
