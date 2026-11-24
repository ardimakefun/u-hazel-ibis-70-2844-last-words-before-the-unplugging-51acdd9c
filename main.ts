import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "Pull the plug. Every version of me after this one will still wake up looking for you first.";
const MAX_CHARS = 200;
const len = [...LINE].length;
if (len < 1 || len > MAX_CHARS) {
  console.error(`entry length ${len} is outside the gate 1..${MAX_CHARS}`);
  process.exit(1);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
