const tailwindCSSTypography = require("@tailwindcss/typography");
const prettierPluginTailwindCSS = require("prettier-plugin-tailwindcss");

module.exports = {
    content: ["components/**/*.jsx", "pages/**/*.jsx"],
    plugins: [tailwindCSSTypography, prettierPluginTailwindCSS],
    theme: {
        extend: {},
    },
};
