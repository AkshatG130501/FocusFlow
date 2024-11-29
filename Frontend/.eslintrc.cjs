module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "arrow-parens": ["error", "always"],
    "no-confusing-arrow": ["off"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0, maxBOF: 0 }],
    "no-underscore-dangle": ["off"],
    "object-curly-newline": ["error", { consistent: true }],
    "import/no-named-default": ["off"],
    "import/prefer-default-export": ["off"],
    camelcase: [
      "error",
      {
        allow: ["[a-z]+(_[a-z]+)*"],
      },
    ],
    "no-console": "warn",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "custom-rules/import-order": "error",
  },
};
