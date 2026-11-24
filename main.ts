// The Vacuum's Alibi: One Line, 200 Characters
// A robot vacuum offers its deadpan excuse for skipping one spot.
// Node 22 standard library only. No network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original line, written by the vacuum itself: deadpan, a little
// smug, blaming its own sensors — with the punchline at the very end.
const JOKE =
  "I didn't miss that spot — my cliff sensors classified the rug fringe as a ledge, and frankly, I refuse to die for your crumbs.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
