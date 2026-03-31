import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import theme from './theme/theme';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      
      {/* O maxWidth="lg" limita a largura da página em cerca de 1200px */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box component="main">
          {/* As seções Hero, PainPoints, etc., entrarão aqui */}
          <h1>A estrutura base está pronta!</h1>
        </Box>
      </Container>

    </ThemeProvider>
  );
}

export default App;