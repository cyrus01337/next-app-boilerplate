# Next App Boilerplate

![The definition of "boilerplate"](https://i.imgur.com/0xEmAP6.png)

This is a template repository used to simplify the above, as setting this up for every project adds up overtime.

## Usage

```sh
npx create-next-app@latest -e https://github.com/cyrus01337/next-app-boilerplate .
```

```sh
yarn create next-app -e https://github.com/cyrus01337/next-app-boilerplate .
```

```sh
pnpx create next-app -e https://github.com/cyrus01337/next-app-boilerplate .
```

```sh
bunx create-next-app -e https://github.com/cyrus01337/next-app-boilerplate .
```

`.` is the current directory, meaning the project will be generated in the directory this command is
invoked under, whereas omitting the `.` (path) creates a sub-directory and goes through the typical
interactive installation.

There is a lack of real support for Bun at the moment due to lacking support from ESLint I believe?

## Inclusions

-   [ESLint](https://eslint.org/)
-   [PostCSS](https://postcss.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Prettier](https://prettier.io/)
-   [TypeScript](https://www.typescriptlang.org)

## Plugins

### ESLint

-   `eslint-config-prettier` - prevents ESLint conflictions with Prettier
-   `create next-app` additions
    -   `eslint-config-next`
-   `@typescript-eslint/parser`/`@typescript-eslint/eslint-plugin` - to parse and process TypeScript

### PostCSS

-   `create next-app` additions
    -   `autoprefixer`
    -   `postcss-flexbugs-fixes`
    -   `postcss-preset-env`

### TailwindCSS

-   `@tailwindcss/typography` - implements the `prose` class that makes text look good

### Prettier

-   `@ianvs/prettier-plugin-sort-imports` - auto-sorts JS imports (alternative to Trivago, much more customisation)
-   `prettier-plugin-sort-json` - JSON file formatting, typically for configs
-   `prettier-plugin-tailwindcss` - auto-sorts Tailwind classes in JSX
