// make.fun — "The Funniest Sick-Day Excuse"
// Writes one sick-day excuse to /output/entry.txt.
// Deterministic: the text is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "Can't come in today — my smart fridge updated overnight and now it only opens for people who meal prep, and honestly it has a point.";

// The gate allows 1–200 characters: fail loudly rather than submit an invalid line.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`TEXT must be 1-200 characters, got ${TEXT.length}`);
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
