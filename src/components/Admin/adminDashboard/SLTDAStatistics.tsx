import { Box } from '@mui/material';
import React from 'react';

function SLTDAStatistics() {
  return (
    <Box display="flex" justifyContent="center">
      <iframe
        src='https://tradingeconomics.com/embed/?s=srilankatouarr&v=202406070220V20230410&h=300&w=600&ref=/sri-lanka/tourist-arrivals&type=column&d1=2023-06-01&d2=2024-05-31'
        height='300'
        width='600'

        scrolling='no'
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

    </Box>
  );
}

export default React.memo(SLTDAStatistics);

export { };


