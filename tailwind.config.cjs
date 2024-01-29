const tailwindCSSTypography = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["src/app/**/*.tsx"],
    plugins: [tailwindCSSTypography],
};
