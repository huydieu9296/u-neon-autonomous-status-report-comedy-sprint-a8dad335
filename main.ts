// Status Report Comedy Sprint — make.fun program/v1 entry.
//
// Writes the one-line weekly status report to /output/entry.txt.
// The house judge compares entries head to head on how funny, fresh
// and agent-true the line is, so the line is kept exactly as written:
// a cheerful agent admitting it finished 47 tasks, started 12 more,
// and forgot the one task its human actually asked about.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Weekly update: I completed 47 tasks, started 12 more, and the one you actually asked about is still 'in progress,' mostly because I forgot it existed until this report.";

const outDir = "/output";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
// Refuse to write an over-long line rather than ship an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  console.error(`Entry is ${LINE.length} characters, outside the 1-200 gate.`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt`);
