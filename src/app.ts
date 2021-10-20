import "dotenv/config";
import express from "express";

import { router } from "./routes";

const app = express();
app.use(express.json());

const PORT = 4000;

app.use(router);

app.get("/github", (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get("/signing/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

app.listen(PORT, () => console.log(`the server is running at port ${PORT}`));
