import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  Box,
  Typography,
  Toolbar,
  Paper,
  Stack,
} from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

const ClienteForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Dados do cliente:", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
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
            justifyContent: "center",
            mb: 3,
          }}
        >
          <PersonAddOutlinedIcon sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            Cadastro de Cliente
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
              label="Nome"
              fullWidth
              {...register('nome', { required: 'Nome é obrigatório' })}
              error={!!errors.nome}
              helperText={errors.nome?.message}
              aria-describedby="nome-helper-text"
            />

            <TextField
              label="CPF"
              fullWidth
              {...register('cpf', { required: 'CPF é obrigatório' })}
              error={!!errors.cpf}
              helperText={errors.cpf?.message}
            />

            <TextField
              label="Telefone"
              fullWidth
              {...register('telefone')}
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => reset()}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Cadastrar
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default ClienteForm;