import {
  Box,
  Container,
  IconButton,
  Typography,
  Modal,
  Card,
  CardContent,
  TextField,
  Button,
  CardActions,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import MessageBar from "./components/MessageBar";
import Chat from "./components/Chat";
import { useState, useEffect } from "react";
import { useHandleUser } from "./hooks/useHandleUser";

type MessageType = { user: string; content: string; date: number }[];

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#f5f5f5",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#f5f5f5",
    },
    "&:hover fieldset": {
      borderColor: "#f5f5f5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f5f5f5",
    },
  },
});

function App() {
  const [messages, setMessages] = useState<MessageType>([]);
  const [messagePosted, setMessagePosted] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const { user, handleUserChange } = useHandleUser();

  const handleConfirmUserChange = () => {
    handleUserChange(usernameInput);
    setOpenModal(false);
  };

  const handleSetAnonymous = () => {
    handleUserChange("Anonymous");
    setOpenModal(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setUsernameInput("");
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const fetchedRes = await fetch("http://localhost:3000/messages");
      const fetchedMessages = await fetchedRes.json();
      setMessages(fetchedMessages);
    };

    fetchMessages();
  }, [messagePosted]);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        padding="5rem"
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "1.5rem",
            border: 1,
            borderRadius: 2,
            borderColor: "grey.300",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h1"
              fontSize="2rem"
              fontWeight="bold"
              color="grey.800"
            >
              Mini Message Board
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="body2">
                Connected as <b>{user}</b>
              </Typography>
              <IconButton size="large" onClick={() => setOpenModal(true)}>
                {user === "Anonymous" ? (
                  <PersonRoundedIcon
                    sx={{ fontSize: "2rem", color: "grey.800" }}
                  />
                ) : (
                  <Avatar
                    sx={{ width: "30px", height: "30px", fontSize: "15px" }}
                  >
                    {user.charAt(0)}
                  </Avatar>
                )}
              </IconButton>
            </Box>

            <Modal open={openModal} onClose={handleCloseModal}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <Card
                  sx={{
                    minWidth: 400,
                    bgcolor: "grey.900",
                  }}
                >
                  <CardContent sx={{ color: "grey.100" }}>
                    <Typography color="grey.100" mb={2}>
                      Set Your Username
                    </Typography>
                    <StyledTextField
                      label="Username"
                      variant="outlined"
                      value={usernameInput}
                      onChange={(e) => setUsernameInput(e.target.value)}
                      fullWidth
                      sx={{ input: { color: "white" } }}
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                    />
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      padding: "16px",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      onClick={handleSetAnonymous}
                    >
                      Post as Anonymous
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={handleConfirmUserChange}
                    >
                      Change
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Modal>
          </Box>

          <Chat messages={messages} />

          <Box>
            <MessageBar notifyAdding={setMessagePosted} user={user} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
