const tailwindCSSTypography = require("@tailwindcss/typography");

module.exports = {
    content: ["components/**/*.jsx", "pages/**/*.jsx"],
    plugins: [tailwindCSSTypography],
    theme: {
        extend: {},
    },
};
