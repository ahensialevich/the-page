module.exports = {
  extends: [
    "plugin:astro/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
  ],
  root: true,
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
};
