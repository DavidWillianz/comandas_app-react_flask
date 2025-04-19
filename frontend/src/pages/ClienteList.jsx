import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Button,
  Toolbar,
  Box,
} from "@mui/material";
import { Edit, Delete, Visibility, FiberNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function ClienteList() {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // Lógica para excluir cliente (não implementada aqui)
    console.log(`Cliente com ID ${id} foi deletado.`);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #dbeafe, #bfdbfe)",
        minHeight: "100vh",
        p: 3,
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ borderRadius: 4, boxShadow: 4 }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#1e3a8a",
            color: "#fff",
            padding: 2,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Lista de Clientes
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2563eb",
              ":hover": { backgroundColor: "#1d4ed8" },
            }}
            onClick={() => navigate("/cliente")}
            startIcon={<FiberNew />}
          >
            Novo
          </Button>
        </Toolbar>

        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f1f5f9" }}>
              <TableCell>
                <strong>ID</strong>
              </TableCell>
              <TableCell>
                <strong>Nome</strong>
              </TableCell>
              <TableCell>
                <strong>CPF</strong>
              </TableCell>
              <TableCell>
                <strong>Telefone</strong>
              </TableCell>
              <TableCell>
                <strong>Ações</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow hover key={1}>
              <TableCell>1</TableCell>
              <TableCell>João Silva</TableCell>
              <TableCell>111.222.333-44</TableCell>
              <TableCell>(11) 98765-4321</TableCell>
              <TableCell>
                <Box display="flex" gap={1}>
                  <IconButton
                    title="Visualizar"
                    color="primary"
                    onClick={() => navigate(`/cliente/${1}`)}
                    aria-label="visualizar cliente"
                  >
                    <Visibility />
                  </IconButton>
                  <IconButton
                    title="Editar"
                    color="secondary"
                    onClick={() => navigate(`/cliente/editar/${1}`)}
                    aria-label="editar cliente"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    title="Excluir"
                    color="error"
                    onClick={() => handleDelete(1)}
                    aria-label="excluir cliente"
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ClienteList;