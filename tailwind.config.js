const defaultTheme = require("tailwindcss/defaultTheme");
const tailwindCSSTypography = require("@tailwindcss/typography");

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
