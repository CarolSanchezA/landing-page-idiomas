import { Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Methodology = () => {
  return (
    <Box sx={{ py: 8, bgcolor: '#fafafa', borderRadius: 4, px: { xs: 2, md: 6 } }}>
      <Typography variant="h3" textAlign="center" fontWeight="bold" color="primary.main" gutterBottom sx={{ mb: 6 }}>
        O Método Lemos Idiomas
      </Typography>
      
      <Grid container spacing={6} alignItems="center">
        {/* Lado Esquerdo: Player de Vídeo Falso */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: '350px',
              bgcolor: '#2c2c2c', // Cinza muito escuro simulando vídeo
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: 4
            }}
          >
            {/* Botão de Play simulado */}
            <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: 'secondary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Typography variant="h4" sx={{ ml: 0.5 }}>▶</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Lado Direito: A Lista do MUI */}
        <Grid item xs={12} md={6}>
          <List>
            <ListItem sx={{ mb: 3, alignItems: 'flex-start' }}>
              <ListItemIcon sx={{ mt: 1 }}>
                <CheckCircleIcon color="secondary" fontSize="large" />
              </ListItemIcon>
              <ListItemText 
                primary={<Typography variant="h5" fontWeight="bold" color="primary.main">1. Diagnóstico</Typography>}
                secondary={<Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>Entendemos seu nível atual e seus objetivos reais no mercado.</Typography>} 
              />
            </ListItem>
            
            <ListItem sx={{ mb: 3, alignItems: 'flex-start' }}>
              <ListItemIcon sx={{ mt: 1 }}>
                <CheckCircleIcon color="secondary" fontSize="large" />
              </ListItemIcon>
              <ListItemText 
                primary={<Typography variant="h5" fontWeight="bold" color="primary.main">2. Imersão</Typography>}
                secondary={<Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>Conteúdo 100% focado no seu dia a dia profissional e jargões da área.</Typography>} 
              />
            </ListItem>
            
            <ListItem sx={{ alignItems: 'flex-start' }}>
              <ListItemIcon sx={{ mt: 1 }}>
                <CheckCircleIcon color="secondary" fontSize="large" />
              </ListItemIcon>
              <ListItemText 
                primary={<Typography variant="h5" fontWeight="bold" color="primary.main">3. Aceleração</Typography>}
                secondary={<Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>Prática intensiva com foco em conversão, segurança e autonomia.</Typography>} 
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Methodology;