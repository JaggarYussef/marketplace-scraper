import express from "express";
import { detailedListings } from "./src/connectors/marketplaceFetchers.js";
const app = express();
const port = 9000;
detailedListings();
app.get("/", (req, res) => {
    res.send("hellp");
});
app.listen(port, () => {
    console.log("server started this is new");
});
