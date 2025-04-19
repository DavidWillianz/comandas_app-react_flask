import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Toolbar,
  Paper,
  Stack,
} from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

const FuncionarioForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Dados do funcionário:", data);
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
            Cadastro de Funcionário
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
              label="Matrícula"
              fullWidth
              {...register('matricula', { required: 'Matrícula é obrigatória' })}
              error={!!errors.matricula}
              helperText={errors.matricula?.message}
              aria-describedby="matricula-helper-text"
            />

            <TextField
              label="CPF"
              fullWidth
              {...register('cpf', { required: 'CPF é obrigatório' })}
              error={!!errors.cpf}
              helperText={errors.cpf?.message}
              aria-describedby="cpf-helper-text"
            />

            <TextField
              label="Telefone"
              fullWidth
              {...register('telefone')}
              aria-describedby="telefone-helper-text"
            />

            <FormControl fullWidth error={!!errors.grupo}>
              <InputLabel id="grupo-label">Grupo</InputLabel>
              <Select
                labelId="grupo-label"
                label="Grupo"
                defaultValue=""
                {...register('grupo', { required: 'Grupo é obrigatório' })}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="gerente">Gerente</MenuItem>
                <MenuItem value="funcionario">Funcionário</MenuItem>
              </Select>
              {errors.grupo && (
                <Typography variant="caption" color="error">
                  {errors.grupo.message}
                </Typography>
              )}
            </FormControl>

            <TextField
              label="Senha"
              type="password"
              fullWidth
              {...register('senha', {
                required: 'Senha é obrigatória',
                minLength: { value: 6, message: 'Senha deve ter pelo menos 6 caracteres' },
              })}
              error={!!errors.senha}
              helperText={errors.senha?.message}
              aria-describedby="senha-helper-text"
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

export default FuncionarioForm;