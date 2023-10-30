module.exports = {
    env: {
        es6: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "next/core-web-vitals",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    plugins: ["@typescript-eslint"],
    root: true,
    ignorePatterns: ["*.cjs", "*.js", ".next/", "archive/", "dist/", "node_modules/", "public/"],
    rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "import/no-anonymous-default-export": "off",
        "no-console": "warn",
        "no-control-regex": "off",
        "no-unused-vars": "off",
        "react/no-unescaped-entities": [
            "warn",
            {
                forbid: [">", "}"],
            },
        ],
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react-hooks/exhaustive-deps": "off",
    },
};
