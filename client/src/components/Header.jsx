import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import TuneIcon from "@mui/icons-material/Tune";
import { gmailLogo } from "../constants/constants";
import Search from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { OptionsWrapper, SearchWrapper, StyledAppBar } from "../styled/styled";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {  useStateContext } from "../context/Context";
const Header = () => {
  const {toggleDrawer} = useStateContext();
  return (
    <StyledAppBar>
      <Toolbar>
        <MenuIcon
        onClick={toggleDrawer}
        color="action" />
        <img
          src={gmailLogo}
          alt="gmaillogo"
          style={{
            marginLeft: "15px",
          }}
        />

        <SearchWrapper>
          <Search color="action" />
          <InputBase placeholder="Search mail" />
          <TuneIcon color="action" />
        </SearchWrapper>
        <OptionsWrapper>
          <HelpOutlineOutlinedIcon  color="action" />
          <SettingsIcon   color="action"/>
          <AppsIcon  color="action"/>
          <AccountCircleIcon  color="action"/>
        </OptionsWrapper>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
