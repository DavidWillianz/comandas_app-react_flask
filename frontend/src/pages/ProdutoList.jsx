import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  Button,
  Box,
  Typography,
  Toolbar,
  Paper,
  Stack,
} from '@mui/material';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import IMaskInputWrapper from '../components/IMaskInputWrapper';

const ProdutoForm = () => {
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Dados do produto:", data);
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
          <Inventory2OutlinedIcon sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            Cadastro de Produto
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
              label="Descrição"
              fullWidth
              {...register('descricao', { required: 'Descrição é obrigatória' })}
              error={!!errors.descricao}
              helperText={errors.descricao?.message}
              aria-describedby="descricao-helper-text"
            />

            <Controller
              name="valor_unitario"
              control={control}
              rules={{ required: 'Valor unitário é obrigatório' }}
              render={({ field }) => (
                <TextField
                  label="Valor unitário"
                  fullWidth
                  InputProps={{
                    inputComponent: IMaskInputWrapper,
                    inputProps: {
                      mask: 'num',
                      blocks: {
                        num: {
                          mask: Number,
                          thousandsSeparator: '.',
                          radix: ',',
                          scale: 2,
                          padFractionalZeros: true,
                          normalizeZeros: true,
                          min: 0
                        }
                      }
                    }
                  }}
                  {...field}
                  error={!!errors.valor_unitario}
                  helperText={errors.valor_unitario?.message}
                  aria-describedby="valor-unitario-helper-text"
                />
              )}
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

export default ProdutoForm;