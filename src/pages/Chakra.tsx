import React, { useContext, useRef, useState, createContext } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export const Chakra: React.FC = () => {
  const history = useHistory();
  const itemStyle = {
    p: 2,
    m: 2,
    borderRadius: "xl",
  };
  return (
    <>
      <ChakraProvider>
        {" "}
        <h1>chakra</h1>
        <Box m="2" w="200px" borderWidth="1px" borderRadius="xl">
          <Box sx={itemStyle} bgColor="red.200" fontSize="xs">
            TEST 1
          </Box>
          <Box sx={itemStyle} bgColor="blue.200" fontSize="md">
            TEST 2
          </Box>
          <Box sx={itemStyle} bgColor="green.200" fontSize="xl">
            TEST 3
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
};
const Wrapper = styled.div`
  background: #fafafd;
  min-height: 100vh;
`;
