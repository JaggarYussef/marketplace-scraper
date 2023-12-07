import express, { Application, Response, Request } from "express";
import {
  fetchProjectorsDetails,
  fetchProjectors,
} from "./src/connectors/marketplaceFetchers.js";

const app: Application = express();
const port = 9000;

const fetchedListings = async () => {
  console.log(await fetchProjectors());
};
// fetchedListings();

app.get("/", (req: Request, res: Response) => {
  res.send("hellp");
});

app.listen(port, () => {
  console.log("server started this is new");
});
