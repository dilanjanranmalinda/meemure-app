import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Box } from '@mui/material';

export default function Deposits() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Title>Orders</Title>
    <Box display="flex" justifyContent="center">
      <Box>

      <Typography component="p" variant="h4">
        25
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {formattedDate}
      </Typography>
      </Box>
    </Box>
    </>
  );
}
