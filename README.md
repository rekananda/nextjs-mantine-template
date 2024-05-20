# Base Next
My template for building [Next.js](https://nextjs.org/) app with [Mantine UI](https://mantine.dev/getting-started/) as a component library.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Library](#library)
* [Folder Structure](#folder-structure)
* [Setup](#setup)
  * [Running App](#running-app)
  * [Update color palette](#setup-design-system-color-palette)
  * [Update font family](#setup-design-system-setup-font)
  * [Adding mantine extension](#adding-mantine-extension)

## General info
minimum initial structure for building [Next.js](https://nextjs.org/) app with [Mantine UI](https://mantine.dev/getting-started/) and [Redux](https://react-redux.js.org/).

## Technologies
The project is created with:
* Typescript: ^5
* Next js: ^14
  
## Library
| Name                 | Description                                                    | Url                                           |
|----------------------|----------------------------------------------------------------|-----------------------------------------------|
| @mantine             | Customize component library for react.                         | https://mantine.dev/getting-started/          |
| @tabler/icons-react  | Icon lib package, compatible with mantine example.             | https://tabler.io/icons                       |
| tailwind             | CSS framework for flexible micro manage style.                 | https://tailwindcss.com/                      |
| react-redux          | based state management.                                        | https://react-redux.js.org/                   |
| @reduxjs/toolkit     | extra toolkit for simplyfy installing redux slice/storage.     | https://redux-toolkit.js.org/                 |
| react-hot-toast      | plugin for implement toast alert, for custom content purpose.  | https://react-hot-toast.com/                  |
| react-toastify       | plugin for implement toast alert, for basic info alert.        | https://www.npmjs.com/package/react-toastify  |
| @storybook/nextjs    | Documentation used componenet.                                 | https://storybook.js.org/                     |

## Folder Structure
```bash
.
├── public                       # universal folder for public data who can direct access.
├── src                          # Data sources.
  ├── app                        # routing pages
    ├── layout.tsx               # main file to add css file and setup providers
    ├── StoreProvider.tsx        # setup redux provider.
    ├── ThemeProvider.tsx        # setup mantine profider and toast alert.
  ├── assets                     # list file assets for images and css.
    ├── css                      # list used css file to init font, setup tailwind and css used.
  ├── Components                 # All re-use-able component used.
    ├── Atom                     # All re-use-able component used, atomic level.
      ├── Icon                   # Inital component for implement icon, and add global setup for the icons.
    ├── Molecule                 # All re-use-able component used, molecule level.
      ├── Notification           # Initial component / high order component for wrap customs content toast alert.
    ├── Organisme                # All re-use-able component used, organisme level.
    ├── template.tsx             # example file for creating new component.
  ├── config                     # config files.
    ├── index.ts                 # global variable and variable from .env.
    ├── mantineTheme.ts          # configuration mantine theme, update for personalize your page.
  ├── store                      # all Slice of redux storage.
    ├── index.ts                 # reducer for all redux slice, and alternative for useDispatch and useSelector.
  ├── types                      # storages all types/ interfaces used
  ├── utils                      # storages for any re-use-able functions for general purpose
    ├── toastAlert.tsx           # used to call function for running toast alerts.
├── next.config.mjs              # exclude mantine libfrom getting error webpack.cache.PackFileCacheStrategy.
├── tailwind.config.ts           # re implement colors and font you setup in mantine so can same used using tailwind class.
.
```

## Setup

### Running App
1. Install dependencies
  ```
  npm install
  ```
2. running development
  ```
  npm run dev
  ```
3. running storybook
  ```
  npm run storybook
  ```
4. build for production
  ```
  npm run build
  ```

### Running App: using bun
1. Install dependencies
  ```
  bun install
  ```
2. running development
  ```
  bun --bun run dev
  ```
3. running storybook
  ```
  bun --bun run storybook
  ```
4. build for production
  ```
  bun --bun run build
  ```

### Setup design system: Color palette
1. Edit in `src/config/mantineTheme.ts`.
2. If any update for the color palette, Un-comment the `console.log(JSON.stringify(mantineToTailwindColor()))`. 
3. Replace the update `mantineColor` variable at file `tailwind.config.ts`.

### Setup design system: setup font
1. Import/add font at `src/assets/css/font.css`.
2. Register, the font family at `tailwind.config.ts`.
  ```
  const config: Config = {
    ...
    theme: {
      extend: {
        ...
        fontFamily: {
          sans: ["Inter", "Montserrat", "Roboto", "Nunito Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
        },
        ...
      },
    },
    ...
  };
  ```
3. Register, the font family at `src/config/mantineTheme.ts`.
  ```
  const themeOverride:MantineThemeOverride = createTheme({
    fontFamily: 'Inter, Montserrat, Roboto, Nunito Sans, sans-serif',
    ...
  })
  ```

### Adding mantine extension
1. Install the extension using `npm` or `bun`
2. Add the extension to ``optimizePackageImports`` value at `next.config.mjs`
  ```
  const nextConfig = {
    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
  };
  ```
3. Import css file from the extension at `src/app/layout.tsx`, read the instruction at [references](https://mantine.dev/styles/css-files-list/)


  



