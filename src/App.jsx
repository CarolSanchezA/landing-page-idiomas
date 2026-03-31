import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* O CssBaseline reseta as margens padrão do navegador e aplica a cor de fundo */}
      <CssBaseline /> 
      
      <Header />
      
      {/* As próximas seções (Hero, Depoimentos, etc) entrarão aqui embaixo nos próximos passos */}
    </ThemeProvider>
  );
}

export default App;