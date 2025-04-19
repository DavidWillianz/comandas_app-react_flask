import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  Box,
  Typography,
  Toolbar
} from '@mui/material';

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
        backgroundColor: '#ADD8E6',
        padding: 2,
        borderRadius: 1,
        mt: 2
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: '#ADD8E6',
          padding: 1,
          borderRadius: 2,
          mb: 2,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="h6" color="primary">
          Dados do Cliente
        </Typography>
      </Toolbar>

      <Box
        sx={{
          backgroundColor: 'white',
          padding: 2,
          borderRadius: 3,
          mb: 2
        }}
      >
        <TextField
          label="Nome"
          fullWidth
          margin="normal"
          {...register('nome', { required: 'Nome é obrigatório' })}
          error={!!errors.nome}
          helperText={errors.nome?.message}
        />

        <TextField
          label="CPF"
          fullWidth
          margin="normal"
          {...register('cpf', { required: 'CPF é obrigatório' })}
          error={!!errors.cpf}
          helperText={errors.cpf?.message}
        />

        <TextField
          label="Telefone"
          fullWidth
          margin="normal"
          {...register('telefone')}
        />

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          {...register('email', {
            required: 'Email é obrigatório',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Email inválido'
            }
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button sx={{ mr: 1 }} onClick={() => reset()}>
            Cancelar
          </Button>
          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ClienteForm;
