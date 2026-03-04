import { readFileSync, writeFileSync } from "node:fs";
import { WebSocketServer } from "ws";
import { MkjsInstance } from "./modules/mkjsInstance";

const defaultCfg = {
  port: 8080,
  instances: 1,
  defaultInstance: {
    mapRotation: ["mkdsDefault"],
    mapMode: "random",
    itemConfig: [
      { item: 0, cfg: {} },
      { item: 1, cfg: {} },
      { item: 2, cfg: {} },
    ],
    itemChance: [
      {
        placement: 0.25,
        choices: [
          { item: 0, chance: 0.5 },
          { item: 1, chance: 0.75 },
          { item: 2, chance: 1 },
        ],
      },
      {
        placement: 1,
        choices: [{ item: 2, chance: 1 }],
      },
    ],
  },
};

process.title = "MKJS Dedicated Server";
console.log("Initializing server...");

let config: any;
try {
  config = JSON.parse(readFileSync(new URL("./config.json", import.meta.url), "utf8"));
} catch (err: any) {
  if (err?.code === "ENOENT") {
    console.error("No config file. Writing default config.");
    writeFileSync(new URL("./config.json", import.meta.url), JSON.stringify(defaultCfg, null, "\t"), "utf8");
    config = JSON.parse(readFileSync(new URL("./config.json", import.meta.url), "utf8"));
  } else {
    console.error("FATAL ERROR - could not load config. Check that the syntax is correct.");
    process.exit(1);
  }
}

const wss = new WebSocketServer({ port: config.port });
const instances = Array.from({ length: config.instances }, () => new MkjsInstance());

wss.on("connection", (cli: any) => {
  cli.on("message", (data: Buffer, isBinary: boolean) => {
    if (cli.inst == null) {
      if (isBinary) {
        cli.close();
        return;
      }
      try {
        const obj = JSON.parse(data.toString("utf8"));
        if (obj.t === "*") {
          cli.credentials = obj.c;
          const inst = instances[obj.i];
          if (!inst) cli.close();
          else {
            cli.inst = inst;
            inst.addClient(cli);
          }
        }
      } catch {
        cli.close();
      }
    } else {
      cli.inst.handleMessage(cli, data, { binary: isBinary });
    }
  });

  cli.on("close", () => {
    if (cli.inst != null) cli.inst.removeClient(cli);
  });
});

console.log(`Server listening on ws://localhost:${config.port}`);
