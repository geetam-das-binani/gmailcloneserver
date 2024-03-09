import { Box, Typography } from "@mui/material";
import  CircularProgress  from "@mui/material/CircularProgress";

const Loader = () => {
  return <Box>
     <CircularProgress color="secondary" />
     <Typography>Loading...</Typography>
  </Box>
};

export default Loader;
