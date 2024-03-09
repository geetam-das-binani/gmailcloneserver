import React from 'react'
import { Box,Typography } from '@mui/material'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const error=useRouteError()
    console.log(error);
    
  return (
    <Box sx={{
        marginLeft:"250px"
    }}>
        <Typography variant="h5" sx={{color: "#F44336"}}>
          There was an error loading this page
        </Typography>
    </Box>
  )
}

export default Error
