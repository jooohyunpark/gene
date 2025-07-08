#!/usr/bin/env node

const { execSync } = require("child_process");

// Setup .npmrc before publishing
console.log("🔧 Setting up .npmrc...");
try {
  require("./setup-npmrc.js");
} catch (error) {
  console.error("❌ Failed to setup .npmrc:", error.message);
  process.exit(1);
}

// Check if GITHUB_TOKEN is set
if (!process.env.GITHUB_TOKEN) {
  console.error("❌ GITHUB_TOKEN environment variable is not set");
  console.error("Please set your GitHub token as an environment variable:");
  console.error("export GITHUB_TOKEN=your_github_token_here");
  console.error(
    "Or run the script with: GITHUB_TOKEN=your_token node scripts/publish-token.js"
  );
  process.exit(1);
}

console.log("🔑 GitHub token found, proceeding with publish...");

try {
  // Run the publish command
  execSync("pnpm --filter @jooohyunpark/gene-token publish", {
    stdio: "inherit",
    env: {
      ...process.env,
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    },
  });

  console.log("✅ Successfully published @jooohyunpark/gene-token");
} catch (error) {
  console.error("❌ Failed to publish package:", error.message);
  process.exit(1);
}
