import { Button, Divider, Typography, styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

export const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  position: "static",
  boxShadow: "none",
});
export const SearchWrapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: "80px",
  borderRadius: 8,
  minWidth: "690px",
  maxWidth: "720px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  "& > div": {
    width: "100%",
    padding: "0px 10px",
  },
});
export const OptionsWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
  "& > svg": {
    marginLeft: "20px",
  },
});

export const ComposeButton = styled(Button)({
  color: "#001d35",
  background: "#c2e7ff",
  padding: "15px",
  borderRadius: "16px",
  minWidth: "140px",
  textTransform: "none",
  gap: "8px",
});

export const Container = styled(Box)({
  padding: "8px",
  cursor: "pointer",
});

export const MessageBoxHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "10px 15px",
  background: "#f2f6fc",
  "& > p": {
    fontSize: "14px",
    fontWeight: "500",
  },
});

export const RecipientsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0px 15px",
  "& > div": {
    fontSize: "14px",
    borderBottom: "1px solid #F5F5F5",
    marginTop: "10px",
  },
});

export const FooterWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "10px 15px",
  background: "#f2f6fc",
});

export const SendButton = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  fontWeight: "500",
  textTransform: "none",
  borderRadius: "18px",
  width: "100px",
  "&:hover": {
    background: "#0B57D0",
  },
});

export const Wrapper = styled(Box)({
  padding: "0px 0px 0px 10px",
  background: "#f2f6fc",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",

  "& > div": {
    display: "flex",
    width: "100%",
    alignItems: "center",
    "& > p": {
      fontSize: "14px",
      fontWeight: "500",
    },
  },
});

export const Indicator = styled(Typography)({
  fontSize: "12px !important",
  background: "#ddd",
  color: "#222",
  padding: "0px 4px",
  borderRadius: "4px",
  marginLeft: "6px",
  marginRight:'6px',
  height:"18px"
});

export const MailDate = styled(Typography)({
  marginLeft: "auto",
  marginRight: "20px",
  fontSize: "12px",
  color: "#5F6368",
});

export const IconWrapper = styled(Box)({
  padding: 15
});

export const Subject = styled(Typography)({
  fontSize: 22,
  margin: '10px 0 20px 75px',
  display: 'flex'
})



export const ImageTag = styled('img')({
borderRadius: '50%',
width: "40px",
height: "40px",
margin: '5px 10px 0 10px',
backgroundColor: '#cccccc'
});

export const ContainerWrapper = styled(Box)({
marginLeft: 15,
width: "calc(100% - 300px)",
'& > div': {
    display: 'flex',
    '& > p > span': {
        fontSize: 12,
        color: '#5E5E5E'
    }
}
});

export const DateWrapper = styled(Typography)({
margin: '0 50px 0 auto',
fontSize: 12,
color: '#5E5E5E'
})

export const Component = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  marginTop: 50,
  opacity: .8,
});

export const StyledDivider = styled(Divider)({
  width: '100%',
  marginTop: 10
})