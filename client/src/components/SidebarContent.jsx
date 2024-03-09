import {
  Backdrop,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { ComposeButton, Container } from "../styled/styled";
import { SIDEBAR_DATA } from "../config/config";
import ComposeMail from "./ComposeMail";
import { Suspense, useState } from "react";
import { Toaster } from "react-hot-toast";
import { NavLink, useParams } from "react-router-dom";
import { routes } from "../constants/routeConstants";
const SidebarContent = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { type } = useParams();
  const handleDialog = () => {
    setOpenDialog((prev) => !prev);
  };
 
  return (
    <Container>
      <ComposeButton onClick={handleDialog} variant="contained">
        <CreateIcon />
        Compose
      </ComposeButton>

      <List>
        {SIDEBAR_DATA?.map((item) => (
          <NavLink
            style={{ textDecoration: "none", color: "inherit" }}
            key={item.title}
            to={`${routes.emails.path}/${item.name}`}
          >
            <ListItem
              sx={{
                background:
                  type === item.name.toLocaleLowerCase() ? "#d3e3fd" : "none",
                borderRadius: "0 16px 16px 0",
              }}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  <item.icon
                    sx={{
                      color: "#001d35",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Suspense fallback={<Backdrop open />}>
        <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </Suspense>
      <Toaster />
    </Container>
  );
};

export default SidebarContent;
