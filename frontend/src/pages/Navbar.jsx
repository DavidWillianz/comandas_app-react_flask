import { AppBar, Toolbar, Typography, Button, IconButton, Box, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { useTheme } from '@mui/material/styles';

import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLogout = () => {
    logout();
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

        {isAuthenticated && (
          <Box display="flex" gap={1}>
            {isSmallScreen ? (
              <IconButton color="inherit" onClick={() => navigate('/home')}>
                <HomeIcon />
              </IconButton>
            ) : (
              <Button
                color="inherit"
                startIcon={<HomeIcon />}
                onClick={() => navigate('/home')}
                sx={{ textTransform: 'none' }}
              >
                Home
              </Button>
            )}
            {isSmallScreen ? (
              <IconButton color="inherit" onClick={() => navigate('/funcionarios')}>
                <PeopleIcon />
              </IconButton>
            ) : (
              <Button
                color="inherit"
                startIcon={<PeopleIcon />}
                onClick={() => navigate('/funcionarios')}
                sx={{ textTransform: 'none' }}
              >
                Funcionários
              </Button>
            )}
            {isSmallScreen ? (
              <IconButton color="inherit" onClick={() => navigate('/clientes')}>
                <PersonIcon />
              </IconButton>
            ) : (
              <Button
                color="inherit"
                startIcon={<PersonIcon />}
                onClick={() => navigate('/clientes')}
                sx={{ textTransform: 'none' }}
              >
                Clientes
              </Button>
            )}
            {isSmallScreen ? (
              <IconButton color="inherit" onClick={() => navigate('/produtos')}>
                <ShoppingCartIcon />
              </IconButton>
            ) : (
              <Button
                color="inherit"
                startIcon={<ShoppingCartIcon />}
                onClick={() => navigate('/produtos')}
                sx={{ textTransform: 'none' }}
              >
                Produtos
              </Button>
            )}
            {isSmallScreen ? (
              <IconButton color="inherit" onClick={handleLogout}>
                <LogoutIcon />
              </IconButton>
            ) : (
              <Button
                onClick={handleLogout}
                startIcon={<LogoutIcon />}
                sx={{
                  textTransform: 'none',
                  color: '#f87171',
                  fontWeight: 'bold',
                }}
              >
                Sair
              </Button>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;