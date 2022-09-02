# Next App Boilerplate

![The definition of "boilerplate"](https://i.imgur.com/0xEmAP6.png)

This is a template repository used to simplify the above, as setting this up for every project adds up overtime.

## Usage

```sh
yarn create next-app -e https://github.com/cyrus01337/next-app-boilerplate .
```

`.` is the current directory, meaning the project will be generated in the directory this command is invoked under, whereas omitting the `.` (path) creates a sub-directory and goes through the typical interactive installation.

## Inclusions

-   [ESLint](https://eslint.org/)
-   [PostCSS](https://postcss.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Prettier](https://prettier.io/)

## Plugins

### ESLint

-   `eslint-config-prettier` - prevents ESLint conflictions with Prettier
-   `yarn create next-app` additions
    -   `eslint-config-next`

### PostCSS

-   `postcss-font-magician` - makes adding fonts much, much easier
-   `yarn create next-app` additions
    -   `autoprefixer`
    -   `postcss-flexbugs-fixes`
    -   `postcss-preset-env`

### TailwindCSS

-   `@tailwindcss/typography` - implements the `prose` class that makes text look good

### Prettier

-   `@trivago/prettier-plugin-sort-imports` - auto-sorts JS imports
-   `prettier-plugin-sort-json` - JSON file formatting, typically for configs
-   `prettier-plugin-tailwindcss` - auto-sorts Tailwind classes in JSX
