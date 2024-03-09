import { useParams } from "react-router-dom";
import { useStateContext } from "../context/Context";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Checkbox, List } from "@mui/material";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";
import DisplayMails from "./DisplayMails";
import NoMails from "./NoMails";
import { EMPTY_TABS } from "../constants/constants";
const Emails = () => {
  const { openDrawer } = useStateContext();
  const { type } = useParams();
  const [selectedEmails, setSelectedEmails] = useState([]);
  const { fetchAgain, toggleFetchAgain } = useStateContext();
  const { call, response, loader } = useApi(API_URLS.getEmailFromType);
  const saveEmailsToTrash = useApi(API_URLS.moveEmailsToTrash);

  useEffect(() => {
    call({}, type);
  }, [type, fetchAgain]);

  const selectAllEmails = (e) => {
    const { checked } = e.target;
    if (checked) {
      setSelectedEmails(response?.emails?.map((email) => email._id));
    } else {
      setSelectedEmails([]);
    }
  };

  const deleteSelectedEmails = async () => {
    if (type === "trash" && selectedEmails?.length > 0) {
      await saveEmailsToTrash.call(selectedEmails, type);
    } else if (selectAllEmails?.length > 0 && type !== "trash") {
      await saveEmailsToTrash.call(selectedEmails, type);
    }
    toggleFetchAgain();
  };
  return (
    <Box
      style={{
        marginLeft: openDrawer ? "250px" : "0px",
        width: "calc(100% - 250px)",
      }}
    >
      {loader ? (
        <CircularProgress />
      ) : (
        <Box>
          <Box
            sx={{
              padding: "20px 10px 0px 10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
            <DeleteOutlineOutlined onClick={deleteSelectedEmails} />
          </Box>
          <List>
            {response?.emails?.map((email) => (
              <DisplayMails
                selectedEmails={selectedEmails}
                key={email._id}
                {...email}
                setSelectedEmails={setSelectedEmails}
              />
            ))}
          </List>
          {
            response?.emails?.length === 0 && (
              <NoMails message={EMPTY_TABS[type]} />
            )
          }
        </Box>
      )}
    </Box>
  );
};

export default Emails;
