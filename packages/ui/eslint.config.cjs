const config = require("@gene/config/eslint.config.js");

module.exports = {
  ...config,
  ignores: ["dist"],
  rules: {
    ...config.rules,
    "no-unused-vars": "error",
  },
};
