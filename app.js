const express = require("express");
const path = require("path");
const { OpenAssistantApp } = require("@open-assistant/framework");
const simpleBot = require("./assistants/simpleBot");

const app = express();
const oaf = new OpenAssistantApp();

app.use(express.static("public"));
app.use(express.json());

oaf.registerAssistant(simpleBot);
app.post("/api/simple-bot", async (req, res) => {
  const response = await simpleBot.process({ input: req.body.input });
  res.json(response);
});

app.use(oaf.router);

app.listen(3000, () => {
  console.log("App running on http://localhost:3000");
});
