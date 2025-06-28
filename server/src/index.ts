import express from "express";
const app = express();
app.get("/", (_, res) => res.send("API is live"));
app.listen(3000, () => console.log("API @ http://localhost:3000"));
