import React from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Toolbar,
  Paper,
  Stack,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();

  const onSubmit = (data) => {
    const { username, password } = data;

    login(username, password)
      .then(() => {
        toast.success("Login realizado com sucesso!");
      })
      .catch(() => {
        toast.error("Usuário ou senha inválidos!");
      });
  };

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
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#1e3a8a",
            color: "#fff",
            padding: 2,
            borderRadius: 3,
            boxShadow: 3,
            mb: 3,
            justifyContent: "center",
          }}
        >
          <LockOutlinedIcon sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            Login
          </Typography>
        </Toolbar>

        <Paper
          elevation={4}
          sx={{
            padding: 4,
            borderRadius: 4,
            backgroundColor: "#ffffff",
          }}
        >
          <Stack spacing={3}>
            <TextField
              label="Usuário"
              fullWidth
              {...register('username', { required: 'Usuário é obrigatório' })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />

            <TextField
              label="Senha"
              type="password"
              fullWidth
              {...register('password', {
                required: 'Senha é obrigatória',
                minLength: {
                  value: 6,
                  message: 'Senha deve ter pelo menos 6 caracteres',
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ py: 1.5, fontWeight: 'bold', borderRadius: 2 }}
            >
              Entrar
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginForm;
