import React, { useEffect } from "react";
import { useStateContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import { emptyInbox } from "../constants/constants";
import {
  IconWrapper,
  Indicator,
  Subject,
  ContainerWrapper,
  ImageTag,
  DateWrapper,
} from "../styled/styled";
const ViewEmails = () => {
  const { openDrawer } = useStateContext();
  const { id } = useParams();
  const navigate=useNavigate()
  const { response, call } = useApi(API_URLS.getEmailDetails);
  const saveEmailsToTrash = useApi(API_URLS.moveEmailsToTrash);

  useEffect(() => {
    call({}, id);
  }, [id]);

  const handleDeleteMail=async()=>{
    await saveEmailsToTrash.call([id]);
   navigate("/emails/allmail")
  }

  return (
    <Box
      style={
        openDrawer ? { marginLeft: 250, width: "100%" } : { width: "100%" }
      }
    >
      <IconWrapper>
        <ArrowBackIcon
          fontSize="small"
          color="action"
          onClick={() => window.history.back()}
        />
        <DeleteIcon
          fontSize="small"
          color="action"
          sx={{ marginLeft: "40px " }}
          onClick={handleDeleteMail}
        />
      </IconWrapper>
      <Subject>
        {response?.email?.subject} <Indicator component="span">Inbox</Indicator>
      </Subject>
      <Box sx={{ display: "flex" }}>
        <ImageTag src={emptyInbox} alt="profile" />
        <ContainerWrapper>
          <Box>
            <Typography>
              {response?.email?.to?.split("@")[0]}
              <Box component="span">&nbsp;&#60;{response?.email?.to}&#62;</Box>
            </Typography>
            <DateWrapper>
              {new Date(response?.email?.date).getDate()}
              {new Date(response?.email?.date).toLocaleString("default", { month: "long" })}
              &nbsp;
              {new Date(response?.email?.date).getFullYear()}
            </DateWrapper>
          </Box>
          <Typography style={{ marginTop: 20 }}>
            {response?.email?.body}
          </Typography>
        </ContainerWrapper>
      </Box>
    </Box>
  );
};

export default ViewEmails;
