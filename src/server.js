import express from "express";
import { logger } from "./logs/logger.js";
import { options } from "./config/config.js";
import { apiRouter } from "./routes/index.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRouter);

const PORT = options.server.PORT;

const server = app.listen(PORT, () =>
  logger.info(
    `The application is running on port ${PORT} (Process: ${process.pid}).`
  )
);
server.on("error", (error) =>
  logger.error(`There was an error on the server at port ${PORT}: ${error}.`)
);
