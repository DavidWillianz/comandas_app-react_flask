import React from "react";
import { Box, Typography, Toolbar, Button, Paper, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #dbeafe, #bfdbfe)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Toolbar
          sx={{
            backgroundColor: "#1e3a8a",
            color: "#fff",
            padding: 2,
            borderRadius: 3,
            boxShadow: 3,
            justifyContent: "center",
            mb: 3,
          }}
        >
          <ErrorOutlineIcon sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            404 - Página Não Encontrada
          </Typography>
        </Toolbar>

        <Paper
          elevation={4}
          sx={{
            padding: 4,
            borderRadius: 4,
            backgroundColor: "#ffffff",
            textAlign: "center",
          }}
        >
          <Stack spacing={3}>
            <Typography variant="body1" color="text.secondary">
              😕 Ops! A página que você tentou acessar não existe.
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Verifique a URL digitada ou clique no botão abaixo para voltar à página inicial.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/home')}
              sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 'bold' }}
            >
              Voltar à Home
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default NotFound;
