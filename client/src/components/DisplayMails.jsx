import { Checkbox, Typography, Box } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import { MailDate, Wrapper } from "../styled/styled";
import { Indicator } from "../styled/styled";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants/routeConstants";
import { useStateContext } from "../context/Context";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
const DisplayMails = ({
  subject,
  body,
  date,
  sentBy,
  _id,
  selectedEmails,
  setSelectedEmails,
  starred,
}) => {
  const navigate = useNavigate();
  const { toggleFetchAgain } = useStateContext();
  const { call } = useApi(API_URLS.toggleStarredEmail);
  const handleStarredMail = async () => {
    await call({ _id, starred });
    toggleFetchAgain();
  };
  const handleChange = () => {
    if (selectedEmails.includes(_id)) {
      setSelectedEmails(
        selectedEmails
          .filter((emailId) => emailId !== _id)
          .map((email) => email)
      );
    } else {
      setSelectedEmails([...selectedEmails, _id]);
    }
  };
  

  return (
    <Wrapper>
      <Checkbox
        onChange={handleChange}
        checked={selectedEmails.includes(_id)}
        size="small"
      />
      {starred ? (
        <StarRateIcon
          size="small"
          sx={{
            marginRight: "10px",
            color: "orange",
          }}
          onClick={handleStarredMail}
        />
      ) : (
        <StarBorderIcon
          size="small"
          sx={{
            marginRight: "10px",
          }}
          onClick={handleStarredMail}
        />
      )}

      <Box onClick={() => navigate(`${routes.view.path}/${_id}`)}>
        <Typography
          sx={{
            width: "250px",
            overflow: "hidden",
          }}
        >
          {sentBy}
        </Typography>
        <Indicator>Inbox</Indicator>
        <Typography>
          {subject} {body && `-${body}`}
        </Typography>
        <MailDate>
          {new Date(date).getDate()}

          {new Date(date).toLocaleString("default", { month: "long" })}
        </MailDate>
      </Box>
    </Wrapper>
  );
};

export default DisplayMails;
