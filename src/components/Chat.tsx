import { Box } from "@mui/material";
import Message from "./Message";

type ChatProp = {
  messages: { user: string; content: string; date: number }[];
};

function Chat({ messages }: ChatProp) {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        height="100%"
        overflow="scroll"
        pb="2rem"
        mt="1rem"
        sx={{
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {messages.map((msg, index) => (
          <Message
            key={index}
            user={msg.user}
            content={msg.content}
            date={msg.date}
            index={index + 1}
          />
        ))}
      </Box>
    </>
  );
}

export default Chat;
