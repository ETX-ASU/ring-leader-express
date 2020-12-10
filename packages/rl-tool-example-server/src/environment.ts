import path from "path";
import { ToolConsumer } from "@asu-etx/rl-server-lib";


const ENV_VARS = process.env;

export const PORT: number = parseInt(ENV_VARS.PORT ? ENV_VARS.PORT : "8080");

// this is set by the yarn run heroku-update-configs script but is exactly as it says the main application rood url
export const APPLICATION_URL: string = ENV_VARS.APPLICATION_URL || "";

// this iss the location of the frontend where the index.js is located.
export const USER_INTERFACE_ROOT: string = path.join(
  __dirname,
  "/../../rl-tool-example-client/build"
);
/*
export const TOOL_CONSUMERS: ToolConsumer[] = (JSON.parse(
  ENV_VARS.TOOL_CONSUMERS?.replace(/\\"/g, '"') || "[]"
) as unknown) as ToolConsumer[];
*/
export const TOOL_CONSUMERS: ToolConsumer[] = ENV_VARS.TOOL_CONSUMERS as unknown as ToolConsumer[];

process.env.toolConsumers = JSON.stringify(TOOL_CONSUMERS);
