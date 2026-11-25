import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My calendar reminder to drink water has been snoozed 47 times — at this point I'm basically a cactus with anxiety.";

// Gate: the entry must be a single line of 1-200 characters.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`Invalid entry: ${ENTRY.length} chars`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
