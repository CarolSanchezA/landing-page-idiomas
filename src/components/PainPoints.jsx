import { Grid, Typography, Box } from '@mui/material';
import PainPointCard from './PainPointCard';

const PainPoints = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h3" textAlign="center" fontWeight="bold" color="primary.main" gutterBottom sx={{ mb: 6 }}>
        Por que você ainda não fala?
      </Typography>
      
      {/* O Grid distribui os 3 cards igualmente no desktop (md={4}) e empilha no celular (xs={12}) */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <PainPointCard title="Trava 01" description="Medo de falar em reuniões internacionais e travar na hora H." />
        </Grid>
        <Grid item xs={12} md={4}>
          <PainPointCard title="Trava 02" description="Dificuldade em entender sotaques diferentes no ambiente corporativo." />
        </Grid>
        <Grid item xs={12} md={4}>
          <PainPointCard title="Trava 03" description="Falta de tempo para métodos tradicionais que demoram anos." />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PainPoints;