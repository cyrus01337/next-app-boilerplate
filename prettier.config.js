const prettierPluginSortImports = require("@trivago/prettier-plugin-sort-imports");
const prettierPluginSortJSON = require("prettier-plugin-sort-json");
const prettierPluginTailwindCSS = require("prettier-plugin-tailwindcss");

module.exports = {
    plugins: [
        prettierPluginSortImports,
        prettierPluginSortJSON,
        prettierPluginTailwindCSS,
    ],
    arrowParens: "avoid",
    jsonRecursiveSort: true,
    tabWidth: 4,
    importOrder: ["^[./]"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
