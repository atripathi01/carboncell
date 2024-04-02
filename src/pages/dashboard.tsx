import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <Typography sx={{ fontSize: '18px' }}>Dashboard</Typography>
      <Divider sx={{ mb: 3, opacity: 0.6, background: '#fff' }} />
      <Box mt={4}>
        <h3>Coming Soon..</h3>
      </Box>
    </div>
  );
};

export default Dashboard;
