import { Box, Grid } from '@mui/material';
import Top4Card from './Top4Card';
import { Zap } from 'lucide-react';

const Top4CardsDisplay = () => {
  return (
    <Box justifyContent="center" px={2}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Top4Card
            position="Most Tips Given"
            name="John Doe"
            number="219"
            icon={<Zap size={48} color="#28e6c0" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Top4Card
            position="Most Active"
            name="Jane Smith"
            number="183"
            icon={<Zap size={48} color="#28e6c0" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Top4Card
            position="Longest Streaks"
            name="Chris Johnson"
            number="34"
            icon={<Zap size={48} color="#28e6c0" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Top4Card
            position="Rank Change"
            name="Emily Davis"
            number="12"
            icon={<Zap size={48} color="#28e6c0" />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Top4CardsDisplay;
