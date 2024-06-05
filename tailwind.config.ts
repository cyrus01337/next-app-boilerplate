import tailwindCSSTypography from "@tailwindcss/typography";

import type { Config } from "tailwindcss";

export default {
    content: ["src/**/*.tsx"],
    plugins: [tailwindCSSTypography],
} satisfies Config;
