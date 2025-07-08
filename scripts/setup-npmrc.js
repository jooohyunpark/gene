const fs = require("fs");
const path = require("path");

// Load .env variables
require("dotenv").config();

const templatePath = path.join(__dirname, "../.npmrc.template");
const outputPath = path.join(__dirname, "../.npmrc");

// Read template
let template = fs.readFileSync(templatePath, "utf-8");

// Replace ${VAR_NAME} with corresponding environment variable
template = template.replace(/\$\{(\w+)\}/g, (_, key) => {
  const value = process.env[key];
  if (!value) {
    console.warn(`⚠️ Warning: ${key} is not defined in .env`);
  }
  return value || "";
});

// Write to .npmrc
fs.writeFileSync(outputPath, template);
console.log("✅ .npmrc generated from template.");
