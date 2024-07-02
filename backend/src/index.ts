import express from "express";
import cors from "cors";
import { Response, Request } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { Messages } from "./models/Messages";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

type IMessages = {
  user: string;
  content: string;
  date: Date;
};

const main = async () => {
  console.log("About to connect to MongoDB");
  await mongoose.connect(process.env.DATABASE_URL ?? "");
  console.log("MongoDB Connected");
};

main().catch((err) => console.log(err));

app.get("/", (req: Request, res: Response) => {
  res.send("Server running");
});

app.get("/messages", async (req: Request, res: Response) => {
  const messages: Array<IMessages> = await Messages.find({});
  res.json(messages);
});

app.post("/new", async (req: Request, res: Response) => {
  console.log(req.body);
  const newMessage = new Messages({
    user: req.body.user === "" ? "Anonymous" : req.body.user,
    content: req.body.message,
    date: Date.now(),
  });
  await newMessage.save();
  res.status(200).json({ msg: "Request fulfilled" });
});

app.listen(8080, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
