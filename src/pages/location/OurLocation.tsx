import { Box } from '@mui/material';
import React from 'react';

function OurLocation() {
  return (
    <Box display="flex" justifyContent="center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d247.26336696933492!2d80.84388103782906!3d7.441573104989315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d7.4416044999999995!2d80.84399549999999!4m3!3m2!1d7.441605999999999!2d80.843997!5e0!3m2!1sen!2slk!4v1719693678841!5m2!1sen!2slk"
        width="950"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
}

export default React.memo(OurLocation);
