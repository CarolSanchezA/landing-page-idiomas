import { AppBar, Toolbar, Typography, Button, Stack, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="sticky" color="inherit" elevation={1} sx={{ bgcolor: 'white' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          LEMOS IDIOMAS
        </Typography>
        
        {/* Menu de navegação (visível apenas em telas médias/grandes) */}
        <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">O Método</Button>
          <Button color="inherit">Depoimentos</Button>
          <Button color="inherit">FAQ</Button>
        </Stack>

        <Button variant="contained" color="secondary" sx={{ borderRadius: 2 }}>
          Quero acelerar
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;