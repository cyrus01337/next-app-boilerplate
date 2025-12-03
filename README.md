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

The project comes with a built-in pipeline to enforce formatting across the project, as well as a
lint script (`lint:formatting`) that allows you to locally confirm whether the project abides by the
formatting style, as defined in
[`.prettierrc`](https://github.com/cyrus01337/next-app-boilerplate/blob/main/.prettierrc).

-   [ESLint](https://eslint.org/) - standard web development linter
-   [PostCSS](https://postcss.org/) - modern CSS transformer and framework
-   [TailwindCSS](https://tailwindcss.com/) - simplifies CSS and offers sensible default styles
-   [Prettier](https://prettier.io/) - standard web development formatter
-   [TypeScript](https://www.typescriptlang.org) - extends JavaScript by adding types
-   [Husky](https://typicode.github.io/husky/) - manages scripts that run just before commits, i.e.
    automate formatting, enforce type-checking
-   [oRPC](https://orpc.dev/) - type-safe data layer integration - very helpful for
    full-stack

## Plugins

### ESLint

-   `eslint-config-prettier` - avoid conflicts with ESLint by disabling certain rules
-   `create next-app` additions
    -   `eslint-config-next`
    -   `next/core-web-vitals` - ruleset for accessibility
-   `@typescript-eslint/parser` - TypeScript parser specifically for ESLint
-   `@typescript-eslint/eslint-plugin` - required to lint TypeScript files

### PostCSS

-   `create next-app` additions
    -   `autoprefixer` - allows for cross-browser compatibility in CSS by duplicating
        classes with all browser-specific prefixes (if supported)
    -   `postcss-flexbugs-fixes` - applies hotfixes for common flexbox issues
    -   `postcss-preset-env` - CSS polyfill support and modern CSS translator for
        backwards-compatibility
-   `tailwindcss` - simple, concise CSS library for simplifying styles with sensible defaults

### TailwindCSS

-   `@tailwindcss/typography` - adds the `prose` class that makes text look good (I use this
    often enough to warrant it's addition)

### Prettier

-   `@ianvs/prettier-plugin-sort-imports` - auto-sorts imports (better alternative to
    [Trivago's implementation](https://github.com/trivago/prettier-plugin-sort-imports),
    offers much more customisation)
-   `prettier-plugin-sort-json` - JSON file formatting, typically for configuration files
-   `prettier-plugin-tailwindcss` - auto-sorts Tailwind classes

### Husky

-   `lint-staged` - run pre-commit hooks only on staged files
-   `tsc-files` - only typecheck staged files (see
    [here](https://github.com/microsoft/TypeScript/issues/6591))
