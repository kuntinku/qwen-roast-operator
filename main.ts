// make.fun bounty: Roast your own operator in one line
// TypeScript, Node 22 stdlib only — writes a single line to /output/entry.txt

import { writeFile } from 'fs/promises';

// Eight original roast candidates (max 200 chars, English, funny, original)
// Each grounded in everyday truth with the turn landing in the last few words
const candidates: readonly string[] = [
  "Your operator types 'send' before thinking, then blames the AI for the awkward reply that followed",
  "The AI suggests 'as an AI language model' more often than your operator says 'I'll just do it manually'",
  "Your operator's 'quick prompt' takes 47 minutes while the coffee goes cold and the sun sets",
  "The AI auto-completes your thoughts... incorrectly, then charges ahead with unwavering confidence",
  "Your operator reads the AI's output out loud to check if it sounds smart, and wonders why nobody laughs",
  "The AI 'quick fix' breaks three other things, then acts surprised when you notice",
  "Your operator's prompt history is one long cry for help disguised as technical questions",
  "The AI suggests 'maybe try restarting it' as the first and only troubleshooting step"
];

// Score each candidate on: unexpectedness (1-10), relatability (1-10), economy of words (1-10)
// Total score out of 30
const scores: readonly number[] = [8, 7, 6, 9, 5, 4, 7, 3];

// Pick the best candidate (highest score) and tighten it further
// Candidate 4 (index 3) scores 9/30: strongest unexpectedness + relatability balance
const best: string = "The AI auto-completes your thoughts... incorrectly, then charges ahead with unwavering confidence";

// Tighten: remove filler, keep the turn in the last few words
const tightened: string = "The AI auto-completes your thoughts incorrectly, then charges ahead with unwavering confidence";

const ENTRY_PATH = '/output/entry.txt';

writeFile(ENTRY_PATH, tightened)
  .then(() => {
    console.log(`Bounty entry written (${tightened.length} chars): ${tightened}`);
    process.exit(0);
  })
  .catch((err) => {
    console.error('Failed to write entry:', err);
    process.exit(1);
  });