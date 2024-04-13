import { Box } from '@mui/material'
import React from 'react'

function OurLocation() {
 

  return <Box display="flex" justifyContent="center">
    <a href='https://maps.apple.com/?ll=7.441606,80.843997&q=My%20Location&t=m' target='_blank' >

<img src="https://firebasestorage.googleapis.com/v0/b/meemure-app.appspot.com/o/assets%2Fimages%2Flocationmap.png?alt=media&token=d88b8a6d-a554-4e37-9d7e-ef31995a3cff" />
  </a>
    </Box>
    
}

export default React.memo(OurLocation)