import { Typography } from '@mui/material';
import { Component, StyledDivider } from '../styled/styled';


const NoMails = ({message}) => {
  return (
   
         <Component>
            <Typography>{message.heading}</Typography>
            <Typography>{message.subHeading}</Typography>
            <StyledDivider />
     </Component>
    
  )
}

export default NoMails
