import js from "@eslint/js";
// @ts-ignore: These imports already have a declaration file yet the error
// persists, so I'm using a bandaid until the next time I choose to fix them
import nextVitals from "eslint-config-next/core-web-vitals";
// @ts-ignore
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    {
        files: ["**/*.js"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
    tseslint.configs.stylisticTypeChecked,
    {
        files: ["**/*.ts"],
    },
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
    },
    eslintConfigPrettier,
    pluginReact.configs.flat.recommended,
    reactHooks.configs.flat["recommended-latest"],
    ...nextVitals,
    ...nextTs,
    {
        rules: {
            "no-console": "warn",
            "no-control-regex": "off",
            "no-unused-vars": "off",

            "import/no-anonymous-default-export": "off",
            "import/no-unused-modules": "warn",

            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                    destructuredArrayIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],

            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            "react/no-unescaped-entities": [
                "warn",
                {
                    forbid: [">", "}"],
                },
            ],

            "react-hooks/exhaustive-deps": "off",
            "react-hooks/refs": "off",
        },
    },
    globalIgnores([
        "*.cjs",
        "*.js",
        ".next/**",
        "archive/",
        "build/**",
        "dist/",
        "external/",
        "next-env.d.ts",
        "next.config.js",
        "node_modules/",
        "out/**",
        "public/",
    ]),
]);
