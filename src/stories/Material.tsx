import React from "react";

import { Alert, createTheme, Grid, Stack, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import { ButtonAppBar } from "@/components/MaterialUI/organizm/Header";
import { BasicCard } from "@/components/MaterialUI/Molecules/BasicCard";
import { SimpleAccordion } from "@/components/MaterialUI/Molecules/Accordion";
import { Drawer } from "@/components/MaterialUI/organizm/Drawer";
import { AlertDialog } from "@/components/MaterialUI/organizm/Dialog";
import { SimpleTable } from "@/components/MaterialUI/organizm/Table";

export const Material: React.FC = () => {
  const [isOpen, setClose] = React.useState(false);
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogModal = () => {
    setDialogOpen(!isDialogOpen);
  };

  const onChangeModal = () => {
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
            <Drawer onChangeModal={onChangeModal} isOpen={isOpen} />
            <Container
              maxWidth={false}
              sx={{
                margin: "90px 0 30px",
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
                    <Button onClick={handleDialogModal}>登録する</Button>
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
                <SimpleTable />
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
