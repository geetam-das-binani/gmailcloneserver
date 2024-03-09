import Drawer from "@mui/material/Drawer";
import SidebarContent from "./SidebarContent";
import {  useStateContext } from "../context/Context";

const Sidebar = () => {
  const {openDrawer} = useStateContext();
  return (
    <Drawer
      anchor="left"
      hideBackdrop
      ModalProps={{
        keepMounted: true,
      }}
      variant="persistent"
      open={openDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: "250px",
          background: "#F5F5F5",
          borderRight: "none",
          height: "calc(100vh - 64px)",
        },
      }}
    >
     <SidebarContent />
    </Drawer>
  );
};

export default Sidebar;
