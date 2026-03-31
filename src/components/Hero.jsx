import { Grid, Typography, Button, Box } from '@mui/material';

const Hero = () => {
  return (
    // minHeight garante que a seção ocupe boa parte da tela inicial
    <Grid container spacing={4} alignItems="center" sx={{ minHeight: '80vh', py: 8 }}>
      
      {/* Lado Esquerdo: Textos de Impacto e CTA */}
      <Grid item xs={12} md={6}>
        <Typography 
          variant="h2" // Define o tamanho visual
          component="h1" // Define a tag HTML real para SEO
          fontWeight="bold" 
          color="primary.main" 
          gutterBottom
          sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.1 }}
        >
          O Idioma que você precisa para acelerar sua carreira.
        </Typography>
        
        <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4, mt: 2 }}>
          Destrave seu inglês e conquiste as melhores oportunidades no mercado global com o Método Lemos.
        </Typography>
        
        <Button 
          variant="contained" 
          color="secondary" 
          size="large" 
          sx={{ borderRadius: '25px', px: 4, py: 1.5, color: '#000', fontSize: '1.1rem' }}
        >
          Quero me inscrever
        </Button>
      </Grid>

      {/* Lado Direito: Box Cinza simulando a imagem */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: '100%',
            height: '450px',
            bgcolor: '#f5f5f5', // Cinza claro
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)' // Uma sombra suave
          }}
        >
          <Typography color="text.secondary">Imagem do Hero Aqui</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;