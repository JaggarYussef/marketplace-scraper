import express from "express";
const app = express();
const port = 9000;
app.get("/", (req, res) => {
    res.send("hellp");
});
app.listen(port, () => {
    console.log("server started this is new");
});
