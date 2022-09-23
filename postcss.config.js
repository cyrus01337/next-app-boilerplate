module.exports = {
    plugins: [
        "postcss-flexbugs-fixes",
        "tailwindcss",
        [
            "postcss-preset-env",
            {
                autoprefixer: {
                    flexbox: "no-2009",
                },
                features: {
                    "custom-properties": false,
                },
                stage: 3,
            },
        ],
    ],
};
