const fs = require("fs");
const path = require("path");

// Read .env file if it exists
const envPath = path.join(__dirname, "..", ".env");
let envVars = {};

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  envContent.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const [key, ...valueParts] = trimmed.split("=");
      if (key && valueParts.length > 0) {
        envVars[key] = valueParts.join("=");
      }
    }
  });
}

// Also get from process.env
Object.assign(envVars, process.env);

// Read template file
const templatePath = path.join(__dirname, "..", ".npmrc.template");
const template = fs.readFileSync(templatePath, "utf8");

// Substitute environment variables
let result = template;
Object.keys(envVars).forEach((key) => {
  const regex = new RegExp(`\\$\\{${key}\\}`, "g");
  result = result.replace(regex, envVars[key]);
});

// Write to .npmrc
const npmrcPath = path.join(__dirname, "..", ".npmrc");
fs.writeFileSync(npmrcPath, result);

console.log("✅ .npmrc file has been generated successfully");
