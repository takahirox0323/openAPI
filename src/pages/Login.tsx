import React, { useContext, useRef, useState, createContext } from "react";
import styled from "@emotion/styled";

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
  TextField,
  ThemeProvider,
} from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Imga from "@/assets/bg.png";

export const Login: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <img src={Imga} style={{ position: "absolute", width: "100%" }} />
      <Container
        maxWidth={false}
        sx={{
          margin: "74px 0 20px",
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container
          maxWidth={false}
          disableGutters={true}
          sx={{
            marginBottom: 3,
            maxWidth: 480,
            background: "#fff",
          }}
        >
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            ログイン
          </Typography>
          <Box
            sx={{
              maxWidth: 480,
            }}
          >
            <Stack spacing={2.5}>
              <Tooltip title="登録">
                <Button
                  size="large"
                  variant="contained"
                  sx={{ display: "block", flexGrow: 1, borderRadius: 50 }}
                >
                  googleでログイン
                </Button>
              </Tooltip>
              <Tooltip title="登録">
                <Button
                  size="large"
                  variant="contained"
                  sx={{ display: "block", flexGrow: 1, borderRadius: 50 }}
                >
                  facebookでログイン
                </Button>
              </Tooltip>
            </Stack>
          </Box>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            placeholder="ログインID"
            margin="normal"
            sx={{ width: "100%" }}
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            placeholder="パスワード"
            margin="normal"
            sx={{ width: "100%" }}
          />
          <Box
            sx={{
              maxWidth: 480,
            }}
          >
            <Tooltip title="登録">
              <Button
                size="large"
                variant="contained"
                sx={{ flexGrow: 1, borderRadius: 50 }}
              >
                ログイン
              </Button>
            </Tooltip>
          </Box>
        </Container>
      </Container>
    </Box>
  );
};
const Wrapper = styled.div`
  background: #fafafd;
  min-height: 100vh;
`;
