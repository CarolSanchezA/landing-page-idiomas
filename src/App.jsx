import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import theme from './theme/theme';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Methodology from './components/Methodology';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      
      {/* O Container alinha tudo ao centro */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        <Box component="main">
          <Hero />
          <PainPoints />
          <Methodology />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;