import Dialog from "@mui/material/Dialog";
import { Box, InputBase, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  FooterWrapper,
  MessageBoxHeader,
  RecipientsWrapper,
  SendButton,
} from "../styled/styled";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
import { useStateContext } from "../context/Context";
const dailogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRaduis: "10px 10px 0px  0px",
};
const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const [data, setData] = useState({
    to: "",
    subject: "",
    body: "",
  });
  const { toggleFetchAgain } = useStateContext();
  const sentEmailService = useApi(API_URLS.saveSentEmail);
  const saveDraftEmailService = useApi(API_URLS.saveDraftEmail);

  const sendMail = async () => {
    if (window.Email) {
      window.Email.send({
        Host: import.meta.env.VITE_HOST,
        Username: import.meta.env.VITE_USERNAME,
        Password: import.meta.env.VITE_PASSWORD,
        Port: import.meta.env.VITE_PORT,
        To: data.to,
        From: import.meta.env.VITE_FROM,
        Subject: data.subject,
        Body: data.body,
      })
        .then((_) => console.log("sent"))
        .catch((err) => toast(err.message));
    }
    const payLoad = {
      to: data.to,
      subject: data.subject,
      body: data.body,
      from: import.meta.env.VITE_FROM,
      date: new Date(),
      image: "",
      sentBy: import.meta.env.VITE_FROM,
      starred: false,
      type: "sent",
    };

    await sentEmailService.call(payLoad);

    if (sentEmailService.response?.success) {
      setData({
        to: "",
        subject: "",
        body: "",
      });
      toast(sentEmailService.response?.success, {
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
        icon: "✅",
      });
    }

    setOpenDialog(false);
    toggleFetchAgain()
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleClose = async () => {
    const payLoad = {
      to: data.to,
      subject: data.subject,
      body: data.body,
      from: import.meta.env.VITE_FROM,
      date: new Date(),
      image: "",
      sentBy: import.meta.env.VITE_FROM,
      starred: false,
      type: "drafts",
    };
    await saveDraftEmailService.call(payLoad);

    if (saveDraftEmailService.response?.success) {
      setData({
        to: "",
        subject: "",
        body: "",
      });

      toast(saveDraftEmailService.response?.success, {
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
        icon: "✅",
      });
    }

    setOpenDialog(false);
    toggleFetchAgain()
  };
  useEffect(() => {
    if (saveDraftEmailService.error) {
      toast(saveDraftEmailService.error, {
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
        icon: "❌",
      });
    }
    if (sentEmailService.error) {
      toast(sentEmailService.error, {
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
        icon: "❌",
      });
    }
  }, [saveDraftEmailService.error, sentEmailService.error]);
  return (
    <Dialog
      open={openDialog}
      onClose={handleClose}
      PaperProps={{ sx: dailogStyle }}
    >
      <MessageBoxHeader>
        <Typography>New Message</Typography>
        <CloseIcon fontSize="small" onClick={handleClose} />
      </MessageBoxHeader>

      <RecipientsWrapper>
        <InputBase
          placeholder="Recipients"
          onChange={handleChange}
          type="email"
          name="to"
        />
        <InputBase
          placeholder="Subject"
          onChange={handleChange}
          name="subject"
        />
      </RecipientsWrapper>
      <Box>
        <TextField
          name="body"
          onChange={handleChange}
          multiline
          rows={20}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
      </Box>
      <FooterWrapper>
        <SendButton onClick={sendMail}>Send</SendButton>
        <DeleteOutlineOutlinedIcon onClick={handleClose} />
      </FooterWrapper>
    </Dialog>
  );
};

export default ComposeMail;
