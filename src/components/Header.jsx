import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar 
      position="static" 
      color="transparent" 
      elevation={0} // Tira a sombra padrão do AppBar
      sx={{ borderBottom: '1px solid #eaeaea', padding: '10px 5%' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', padding: 0 }}>
        
        {/* Lado Esquerdo: Logo (Placeholder simulando o ícone roxo) */}
        <Box display="flex" alignItems="center" gap={1}>
          <Box sx={{ width: 30, height: 30, backgroundColor: 'primary.main', borderRadius: '6px' }}></Box>
          <Typography variant="h6" color="primary" fontWeight="bold">
            Lemos Idiomas
          </Typography>
        </Box>

        {/* Centro: Links de Navegação (Escondidos em telas de celular) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          <Typography variant="body2" sx={{ cursor: 'pointer', fontWeight: 500, '&:hover': { color: 'primary.main' } }}>
            O Método
          </Typography>
          <Typography variant="body2" sx={{ cursor: 'pointer', fontWeight: 500, '&:hover': { color: 'primary.main' } }}>
            Depoimentos
          </Typography>
          <Typography variant="body2" sx={{ cursor: 'pointer', fontWeight: 500, '&:hover': { color: 'primary.main' } }}>
            FAQ
          </Typography>
        </Box>

        {/* Lado Direito: Botão Verde */}
        <Button 
          variant="contained" 
          color="secondary" 
          sx={{ 
            color: '#000', // Texto preto para contrastar com o verde claro
            borderRadius: '25px', 
            padding: '8px 24px',
            boxShadow: 'none',
            '&:hover': { boxShadow: 'none', filter: 'brightness(0.9)' }
          }}
        >
          Ver planos
        </Button>

      </Toolbar>
    </AppBar>
  );
}

export default Header;