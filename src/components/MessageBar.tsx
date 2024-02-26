import { IconButton, TextField, Box } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useState } from "react";

type MessageBarProp = {
  notifyAdding: Function;
  user: string;
};

function MessageBar({ notifyAdding, user }: MessageBarProp) {
  const [inputMessage, setInputMessage] = useState<string>("");

  const handlePostMessage = async () => {
    await fetch(`${import.meta.env.VITE_SERVER_URL}/new`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ user: user, message: inputMessage }),
    });

    setInputMessage("");
    notifyAdding((prev: Boolean) => !prev);
  };

  return (
    <>
      <Box display="flex" alignItems="center" gap="1rem" height="fit-content">
        <TextField
          placeholder="Write a message"
          fullWidth
          size="small"
          multiline
          maxRows={3}
          name="newMessage"
          InputProps={{
            sx: {
              borderRadius: 5,
              fontSize: "0.87rem",
            },
          }}
          value={inputMessage}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setInputMessage(event.target.value)}
        />

        <IconButton
          disabled={inputMessage === ""}
          color="secondary"
          onClick={handlePostMessage}
        >
          <SendRoundedIcon />
        </IconButton>
      </Box>
    </>
  );
}

export default MessageBar;
