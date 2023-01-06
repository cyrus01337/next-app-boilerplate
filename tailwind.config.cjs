const defaultTheme = require("tailwindcss/defaultTheme");
const tailwindCSSTypography = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["src/**/*.jsx"],
    plugins: [tailwindCSSTypography],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
        },
    },
};
