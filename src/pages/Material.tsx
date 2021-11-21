import React from "react";
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

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import EditIcon from "@mui/icons-material/Edit";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ButtonAppBar } from "@/components/MaterialUI/organizm/Header";
import { BasicCard } from "@/components/MaterialUI/Molecules/BasicCard";
import { SimpleAccordion } from "@/components/MaterialUI/Molecules/Accordion";

export const Material: React.FC = () => {
  const history = useHistory();
  const [isOpen, setClose] = React.useState(false);
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogModal = () => {
    setDialogOpen(!isDialogOpen);
  };

  const onChangeModal = () => {
    console.log(isOpen);
    setClose(!isOpen);
  };

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
              <Container
                maxWidth={false}
                disableGutters={true}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: 3,
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Tooltip title="登録">
                    <Button variant="contained" onClick={handleDialogModal}>
                      登録する
                    </Button>
                  </Tooltip>
                  <Tooltip title="編集">
                    <Button
                      variant="outlined"
                      onClick={handleDialogModal}
                      startIcon={<EditIcon />}
                    >
                      編集する
                    </Button>
                  </Tooltip>
                </Stack>
                <AlertDialog
                  handleDialogModal={handleDialogModal}
                  isDialogOpen={isDialogOpen}
                />
              </Container>

              {/* //テーブル*/}
              <Container
                maxWidth={false}
                disableGutters={true}
                sx={{ marginBottom: 3 }}
              >
                <StickyHeadTable />
              </Container>

              {/* //カード */}
              <Container
                maxWidth={false}
                disableGutters={true}
                sx={{ marginBottom: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <BasicCard />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <BasicCard />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <BasicCard />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <BasicCard />
                  </Grid>
                </Grid>
              </Container>

              {/* //アラート */}
              <Container
                maxWidth={false}
                disableGutters={true}
                sx={{ marginBottom: 3 }}
              >
                {/* 画面幅に応じてspaceおよびdirectionを変更することが可能 */}
                {/* {/* direction={{ xs: 'column', sm: 'row' }} */}
                {/* spacing={{ xs: 1, sm: 2, md: 4 }} */}
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert variant="filled" severity="error">
                    This is an error alert — check it out!
                  </Alert>
                  <Alert variant="filled" severity="warning">
                    This is a warning alert — check it out!
                  </Alert>
                  <Alert variant="filled" severity="info">
                    This is an info alert — check it out!
                  </Alert>
                  <Alert variant="filled" severity="success">
                    This is a success alert — check it out!
                  </Alert>
                </Stack>
              </Container>

              {/* //アコーディオン */}
              <Container
                maxWidth={false}
                disableGutters={true}
                sx={{ marginBottom: 3 }}
              >
                <SimpleAccordion />
                <SimpleAccordion />
                <SimpleAccordion />
              </Container>
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

function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440, height: "100%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

function AlertDialog(props) {
  return (
    <div>
      <Dialog
        open={props.isDialogOpen}
        onClose={props.handleDialogModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleDialogModal}>Disagree</Button>
          <Button onClick={props.handleDialogModal} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}
const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];
const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
