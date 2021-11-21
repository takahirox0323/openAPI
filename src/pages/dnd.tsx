import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Alert,
  Badge,
  createTheme,
  Grid,
  Menu,
  Rating,
  Stack,
  ThemeProvider,
} from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { BasicCard } from "@/components/MaterialUI/Molecules/BasicCard";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragList from "@/components/MaterialUI/organizm/Borad/Borad";

const testTheme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#fff",
    },
  },
});

const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
  },
  {
    id: "cato",
    name: "Little Cato",
  },
  {
    id: "kvn",
    name: "KVN",
  },
  {
    id: "mooncake",
    name: "Mooncake",
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
  },
];

export const DND: React.FC = () => {
  const history = useHistory();
  const [isOpen, setClose] = React.useState(false);
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  const onChangeModal = () => {
    setClose(!isOpen);
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
  }

  return (
    <>
      <ThemeProvider theme={testTheme}>
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <ButtonAppBar onChangeModal={onChangeModal} />
          <Box sx={{ display: "flex" }}>
            <SwipeableTemporaryDrawer
              onChangeModal={onChangeModal}
              isOpen={isOpen}
            />
            <Container
              maxWidth={false}
              sx={{
                margin: "74px 0 20px",
                marginTop: 12,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <DragList />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

function SwipeableTemporaryDrawer(props) {
  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    props.onChangeModal();
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor={"left"}
        open={props.isOpen}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}

function ButtonAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => props.onChangeModal()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            materialUI
          </Typography>
          <Stack direction="row" spacing={2.5} alignItems="center">
            <Badge badgeContent={4} color={"warning"} sx={{ marginTop: 0.5 }}>
              <MailIcon color="secondary" />
            </Badge>
            <AccountCircleIcon onClick={handleProfileMenuOpen} />
          </Stack>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
