module.exports = {
  extends: "@mate-academy/eslint-config",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
  },
};
