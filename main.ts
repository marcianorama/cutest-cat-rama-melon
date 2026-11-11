// cutest-cat-01 entry: writes one picture of a cat to <output dir>/entry.png.
//
// The picture is a ginger kitten waving hello while hugging its plush fish, kept as
// entry.png next to this file. The program copies those exact bytes to the output
// directory, so the judge sees precisely what the repository holds and two runs
// always write identical files.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const repoRoot = new URL('.', import.meta.url);

mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL('./entry.png', repoRoot), join(resolve(outputDir), 'entry.png'));
console.log(`wrote ${outputDir}/entry.png`);
