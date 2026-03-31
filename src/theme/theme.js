import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#481c6e', // Roxo escuro do seu design
    },
    secondary: {
      main: '#7ce577', // Verde limão vibrante dos botões
    },
    background: {
      default: '#ffffff', // Fundo principal da página
    },
    text: {
      primary: '#333333',
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none', // O MUI deixa os botões em MAIÚSCULO por padrão, isso desativa
      fontWeight: 700,
    },
  },
});

export default theme;