{
    "plugins": [
        "postcss-flexbugs-fixes",
        "tailwindcss",
        [
            "postcss-preset-env",
            {
                "autoprefixer": {
                    "flexbox": "no-2009"
                },
                "features": {
                    "custom-properties": false
                },
                "stage": 3
            }
        ],
        [
            "postcss-font-magician",
            {
                "display": "swap",
                "variants": {
                    "Inter": {
                        "400": [],
                        "400 bold": [],
                        "700": [],
                        "700 bold": []
                    }
                }
            }
        ]
    ]
}
