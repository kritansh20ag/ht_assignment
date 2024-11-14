import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { Zap } from 'lucide-react';
import PropTypes from 'prop-types';

const Top4Card = ({ position, name, number }) => {
  return (
    <Card
      sx={{
        backgroundColor: 'white',
        width: 320,
        borderRadius: 4,
        boxShadow: 1,
        display: 'flex',
        alignItems: 'center',
        height: 100, // Reduced height to remove spaces from top and bottom
        overflow: 'hidden',
        boxShadow:10,
        mb: 2,
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', py: 1 }}> {/* Reduced padding top and bottom */}
        {/* User Photo with Zap Icon */}
        <Box sx={{ position: 'relative', mr: 2 }}>
          <Avatar sx={{ width: 60, height: 60, backgroundColor: 'grey.400' }} />
          <Box sx={{ position: 'absolute', top: -4, right: -4 }}>
            <Zap size={24} color="#28e6c0" />
          </Box>
        </Box>

        {/* Position and Name */}
        <Box display="flex" flexDirection="column" flexGrow={1}>
          <Typography variant="body2" color="textSecondary">
            {position}
          </Typography>
          <Typography variant="h6" sx={{ color: 'grey.600',fontWeight:700}}>
            {name}
          </Typography>
        </Box>

        {/* Number */}
        <Typography variant="h5" fontWeight="bold" sx={{ color: 'black', ml: 2,fontWeight:700, fontSize:40 }}>
          {number}
        </Typography>
      </CardContent>
    </Card>
  );
};

Top4Card.propTypes = {
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element,
};

export default Top4Card;

