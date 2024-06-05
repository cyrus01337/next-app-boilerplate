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

```sh
gh repo create -p cyrus01337/next-app-boilerplate --public --clone $(basename $PWD) && \
gh repo clone $(basename $PWD) .
```

`.` is the current directory, meaning the project will be generated in the directory this command is
invoked under, whereas omitting the `.` (path) creates a sub-directory and goes through the typical
interactive installation.

There is a lack of real support for Bun at the moment due to lacking support
from ESLint I believe? So this will have to be setup [manually.](https://bun.sh/docs/typescript)

## Inclusions

-   [ESLint](https://eslint.org/)
-   [PostCSS](https://postcss.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Prettier](https://prettier.io/)
-   [TypeScript](https://www.typescriptlang.org)
-   [Husky](https://typicode.github.io/husky/)

## Plugins

### ESLint

-   `eslint-config-prettier` - prevents ESLint conflictions with Prettier
-   `create next-app` additions
    -   `eslint-config-next`
-   `next/core-web-vitals` - helpful concepts to cover in any Next web app
-   `@typescript-eslint/parser`/`@typescript-eslint/eslint-plugin` - to parse
    and process TypeScript

### PostCSS

-   `create next-app` additions
    -   `autoprefixer`
    -   `postcss-flexbugs-fixes`
    -   `postcss-preset-env`
-   `tailwindcss` - simple, concise CSS library for simplifying styles with sensible defaults

### TailwindCSS

-   `@tailwindcss/typography` - implements the `prose` class that makes text look good

### Prettier

-   `@ianvs/prettier-plugin-sort-imports` - auto-sorts JS imports (alternative
    to [Trivago's implementation](https://github.com/trivago/prettier-plugin-sort-imports),
    much more customisation)
-   `prettier-plugin-sort-json` - JSON file formatting, typically for configs
-   `prettier-plugin-tailwindcss` - auto-sorts Tailwind classes in JSX

### Husky

-   `lint-staged` - makes pre-commit hooks efficient by only running commands across staged files
-   `tsc-files` - allows for type-checking per file (see
    [here](https://github.com/microsoft/TypeScript/issues/6591))
