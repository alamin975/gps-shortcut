// The GPS Swears It Was a Shortcut — the GPS's own one-line excuse for
// sending the driver down the wrong road, in its own smug, defensive voice.
import * as fs from "node:fs";

const entry = "Recalculating. That shortcut saved us four minutes and cost us forty — I call that character development.";

// Write the single excuse line exactly as typed, UTF-8, no trailing newline.
function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
