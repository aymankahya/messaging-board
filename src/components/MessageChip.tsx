import { Avatar, Box, Typography } from "@mui/material";

type MessageChipProps = {
  message: String;
  user: String;
  index: number;
};

function MessageChip({ message, user, index }: MessageChipProps) {
  return (
    <>
      <Box
        display="flex"
        flexDirection={index % 2 === 0 ? "row-reverse" : "row"}
        alignItems="start"
        maxWidth="50%"
        borderRadius="16px"
        bgcolor="grey.100"
        height="fit-content"
        paddingBlock="7px"
        boxSizing="border-box"
      >
        <Avatar
          sx={{
            width: "24px",
            height: "24px",
            marginLeft: `${index % 2 === 0 ? "-6px" : "5px"}`,
            marginRight: `${index % 2 === 0 ? "5px" : "§px"}`,
            fontSize: "0.75rem",
            color: "grey.700",
          }}
        >
          {user.charAt(0)}
        </Avatar>
        <Typography
          display="block"
          variant="body1"
          sx={{
            fontSize: "0.8125rem",
            paddingInline: "12px",
            textAlign: "justify",
            whiteSpace: "pre-line",
          }}
        >
          {message}
        </Typography>
      </Box>
    </>
  );
}

export default MessageChip;
