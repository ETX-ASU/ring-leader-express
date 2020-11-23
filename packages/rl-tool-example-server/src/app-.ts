
import path from "path";
import express from "express";

import exampleServiceEndpoints from "./endpoints/exampleServiceEndpoints";
import { dbInit } from "./database/init";
import { logger } from "@asu-etx/rl-shared";
import { expressApp } from "@asu-etx/rl-server-lib";

import { PORT, USER_INTERFACE_ROOT } from "./environment";

const app = express();

expressApp(app, USER_INTERFACE_ROOT, null);

exampleServiceEndpoints(app);

async function start(): Promise<any> {
  logger.debug("Starting server...");

  // Make sure we have our test activities
  await dbInit(null);

  // Start the app
  app.listen(PORT, "0.0.0.0", () => {
    logger.debug("App is running at", `0.0.0.0:${PORT}`);
  });
}

start();