import React from "react";
import { Box, Typography, Toolbar, Paper, Stack } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const Home = () => {
  const dataAtual = new Date().toLocaleDateString();
  const nomeFuncionario = sessionStorage.getItem("nomeFuncionario");
  const grupoFuncionario = sessionStorage.getItem("grupoFuncionario");

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #dbeafe, #bfdbfe)",
        minHeight: "100vh",
        padding: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 600 }}>
        <Toolbar
          sx={{
            backgroundColor: "#1e3a8a",
            color: "#fff",
            padding: 2,
            borderRadius: 3,
            boxShadow: 3,
            mb: 3,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Página Inicial
          </Typography>
        </Toolbar>

        <Paper elevation={4} sx={{ padding: 3, borderRadius: 4, backgroundColor: "#ffffff" }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="primary">
              Bem-vindo, {nomeFuncionario}!
            </Typography>
            <Typography variant="body2" fontStyle="italic">
              Grupo: {grupoFuncionario}
            </Typography>
            <Typography variant="body1">
              Explore as funcionalidades e aproveite sua experiência com uma
              interface intuitiva e moderna.
            </Typography>
            <Box display="flex" alignItems="center" color="gray">
              <CalendarTodayIcon sx={{ mr: 1 }} />
              <Typography variant="body2">Data atual: {dataAtual}</Typography>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
