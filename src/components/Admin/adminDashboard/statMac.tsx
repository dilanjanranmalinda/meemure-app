import { Box, Typography } from '@mui/material';
import React from 'react';

function StatMac() {
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <iframe
          src='https://data.worldbank.org/share/widget?end=2020&indicators=ST.INT.ARVL&locations=LK&skipRedirection=true&start=1995&view=chart'
          height='300'
          width='600'

          scrolling='no'
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </Box>
    </Box >
  );
}

export default React.memo(StatMac);

export { };