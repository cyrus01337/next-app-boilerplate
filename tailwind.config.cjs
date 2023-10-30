const tailwindCSSTypography = require("@tailwindcss/typography");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["src/**/*.tsx"],
    plugins: [tailwindCSSTypography],
};
