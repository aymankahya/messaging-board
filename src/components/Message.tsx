import { Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import MessageChip from "./MessageChip";

export type MessageProp = {
  user: String;
  content: String;
  date: number;
  index: number;
};

function Message({ user, content, date, index }: MessageProp) {
  return (
    <>
      <Stack direction="column" justifyContent="start" mt={3}>
        <Typography variant="caption" align="center" color="grey.500">
          {format(date, "PPPPp")}
        </Typography>
        <Stack
          direction="column"
          alignItems={index % 2 === 0 ? "end" : "start"}
        >
          <Typography variant="caption">{user}</Typography>
          <MessageChip message={content} user={user} index={index} />
        </Stack>
      </Stack>
    </>
  );
}

export default Message;
