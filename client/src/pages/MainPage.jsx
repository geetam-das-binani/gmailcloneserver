import { Box } from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <Header />
      <Box>
        <Sidebar />

        <Outlet  />
        {/* <Outlet  context={} /> */}
      </Box>
    </>
  );
};

export default MainPage;
