#!/usr/bin/env node

// Load environment variables from .env file
require("dotenv").config();

const { execSync } = require("child_process");

// Check if GITHUB_TOKEN is set
if (!process.env.GITHUB_TOKEN) {
  console.error("❌ GITHUB_TOKEN environment variable is not set");
  console.error("Please create a .env file with your GitHub token:");
  console.error("GITHUB_TOKEN=your_github_token_here");
  process.exit(1);
}

console.log("🔑 GitHub token found, proceeding with publish...");

try {
  // Run the publish command
  execSync("pnpm --filter @jooohyunpark/gene-ui publish", {
    stdio: "inherit",
    env: {
      ...process.env,
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    },
  });

  console.log("✅ Successfully published @jooohyunpark/gene-ui");
} catch (error) {
  console.error("❌ Failed to publish package:", error.message);
  process.exit(1);
}
