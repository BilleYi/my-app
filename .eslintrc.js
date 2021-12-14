module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/require-default-props": 0,
    "linebreak-style": [0, "error", "windows"],
    semi: 0,
    "no-param-reassign": 0,
    "react/jsx-filename-extension": [2, { extensions: ["js", "jsx"] }],
    "import/no-extraneous-denpendencies": 0,
    "import/prefer-default-export": 0,
    "no-unsafe-optional-chaining": 0,
    "no-nonoctal-decimal-escape": 0,
    "import/no-extraneous-dependencies": 0,
    "react/prop-types":0,
    "react/destructuring-assignment": 0,
    "no-console": 0,
    "func-names": 0,
    "default-param-last": 0,
    "react/function-component-definition": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member":0
  },
};
