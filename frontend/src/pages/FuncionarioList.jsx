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
  Box
} from '@mui/material';
import { Edit, Delete, Visibility, FiberNew } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function FuncionarioList() {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: "linear-gradient(to right, #dbeafe, #bfdbfe)", minHeight: "100vh", p: 3 }}>
      <TableContainer component={Paper} sx={{ borderRadius: 4, boxShadow: 4 }}>
        <Toolbar
          sx={{
            backgroundColor: "#1e3a8a",
            color: "#fff",
            padding: 2,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Lista de Funcionários
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#2563eb", ":hover": { backgroundColor: "#1d4ed8" } }}
            onClick={() => navigate('/funcionario')}
            startIcon={<FiberNew />}
          >
            Novo
          </Button>
        </Toolbar>

        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f1f5f9" }}>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Nome</strong></TableCell>
              <TableCell><strong>Matrícula</strong></TableCell>
              <TableCell><strong>CPF</strong></TableCell>
              <TableCell><strong>Telefone</strong></TableCell>
              <TableCell><strong>Grupo</strong></TableCell>
              <TableCell><strong>Senha</strong></TableCell>
              <TableCell><strong>Ações</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow hover key={10}>
              <TableCell>1</TableCell>
              <TableCell>AbcBolinhas</TableCell>
              <TableCell>150445</TableCell>
              <TableCell>888.888.888-08</TableCell>
              <TableCell>49 8888-8888</TableCell>
              <TableCell>Gerente</TableCell>
              <TableCell>******</TableCell>
              <TableCell>
                <Box display="flex" gap={1}>
                  <IconButton title="Visualizar">
                    <Visibility color="primary" />
                  </IconButton>
                  <IconButton title="Editar">
                    <Edit color="secondary" />
                  </IconButton>
                  <IconButton title="Excluir">
                    <Delete color="error" />
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

export default FuncionarioList;
