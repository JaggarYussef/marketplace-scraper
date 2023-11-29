import express, { Application, Response, Request } from "express";

const app: Application = express();
const port = 9000;

app.get("/", (req: Request, res: Response) => {
  res.send("hellp");
});

app.listen(port, () => {
  console.log("server started this is new");
});
