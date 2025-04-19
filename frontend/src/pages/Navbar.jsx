import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const loginRealizado = localStorage.getItem('loginRealizado');

  const handleLogout = () => {
    localStorage.removeItem('loginRealizado');
    navigate('/login');
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#1e3a8a',
        boxShadow: 3,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            letterSpacing: 1,
          }}
        >
          Comandas
        </Typography>

        {loginRealizado && (
          <Box display="flex" gap={1}>
            <Button
              color="inherit"
              onClick={() => navigate('/home')}
              sx={{ textTransform: 'none' }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/funcionarios')}
              sx={{ textTransform: 'none' }}
            >
              Funcionários
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/clientes')}
              sx={{ textTransform: 'none' }}
            >
              Clientes
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/produtos')}
              sx={{ textTransform: 'none' }}
            >
              Produtos
            </Button>
            <Button
              onClick={handleLogout}
              sx={{
                textTransform: 'none',
                color: '#f87171', // vermelho suave
                fontWeight: 'bold',
              }}
            >
              Sair
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
