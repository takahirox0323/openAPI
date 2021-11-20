import React, { useContext, useRef, useState, createContext } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import {
  Alignment,
  Button,
  Intent,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Menu,
  MenuItem,
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

export const BluePrint: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <div>
        <Navbar className={Classes.DARK}>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>News</NavbarHeading>
            <NavbarDivider />

            <AnchorButton
              href=""
              text="アカウント"
              target="_blank"
              minimal
              rightIcon="person"
            />
          </NavbarGroup>
        </Navbar>
        <Menu>
          <MenuItem text="Submenu">
            <MenuItem text="Child one" />
            <MenuItem text="Child two" />
            <MenuItem text="Child three" />
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};
const Wrapper = styled.div`
  background: #fafafd;
  min-height: 100vh;
`;
