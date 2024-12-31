import config from '@gene/config/eslint.config.js';

export default {
  ...config,
  rules: {
    ...config.rules,
    // Add your custom rules here
    'no-unused-vars': 'error',
  },
};
