import { Card, CardContent, Typography, Box } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock'; // Ícone placeholder

const PainPointCard = ({ title, description }) => {
  return (
    <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 2, transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
      <CardContent sx={{ textAlign: 'center', p: 4 }}>
        <Box sx={{ mb: 2, color: 'primary.main', display: 'flex', justifyContent: 'center' }}>
          <LockIcon fontSize="large" />
        </Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom color="primary.main">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PainPointCard;