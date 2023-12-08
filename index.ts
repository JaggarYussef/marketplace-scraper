import express, { Application, Response, Request } from "express";
import { detailedListings } from "./src/connectors/marketplaceFetchers.js";

const app: Application = express();
const port = 9000;

detailedListings();

app.get("/", (req: Request, res: Response) => {
  res.send("hellp");
});

app.listen(port, () => {
  console.log("server started this is new");
});
