# tailwindcss-var

This plugin allows to create and use scoped CSS variables for colors and spacings in your Tailwind CSS project.

For live-examples check out [mariohamann.de/tailwindcss-var](https://mariohamann.de/tailwindcss-var).

## Please read ❤️

- ⚠️ This plugin expects you to use Tailwind CSS >2.0 || >3.0 with JIT mode enabled. (Tested with >3.3)
- Although this plugin has version "2.x", this is still beta. (I switched to 1.x to mark breaking changes). Please be aware of changes in future. Neverthessless it's already tested in production and works well.
- The plugin works out of the box with default color variations of Tailwind CSS (50, 100, ..., 800, 900). If you want to use other variable variations, you'll find some basic instructions below.

## Migration from 1.x

- The plugin now uses "var" as a prefix instead of de dollar sign. (e. g. `$color` -> `varcolor`), as the TailwindCSS parser had problems parsing the dollar sign in Versions >3.1. (I tried lots different ways to escape the dollar sign, but none of them worked. If you have a solution, please let me know. :))
- The plugin now extends your theme per default. You only have to manually extend your theme, if your color definitions are different from the default ones. (See [Modify color variables](#modify-color-variables) below.)

## Installation

1. Add package to your project e. g. `npm install @mariohamann/tailwindcss-var`.
2. Add the plugin to your `tailwind.config.js` with `require('@mariohamann/tailwindcss-var')`.
3. Per default the included variables match Tailwind's default color sets (50–950). If you're using different sets, change the variables as described [below](#modify-color-variables):

4. To test if everything works, add the following classes to an object with text `varcolor-indigo text-varcolor-500`.

## Examples

### Example 1: Basic color change

1. Define your object once with text-varcolor-600, bg-varcolor-50 etc.
2. Fill the variable (dynamically) with e. g. varcolor-pink.
3. text-varcolor-600 renders as text-pink-600, bg-varcolor-50 renders as bg-pink-50.

Try it yourself: https://play.tailwindcss.com/BqEnApCXDd.

![basic color change code example](https://user-images.githubusercontent.com/26542182/221135730-cc2f02c0-37d2-4215-91ba-7d14dbc9e86b.png)
_(The image shows an older version of the plugin. The new version uses "var" as a prefix instead of de dollar sign.)_

### Example 2: Hierarchy and subvalues

- Variables are automatically consumable by every child element.
- You can overwrite variables in every child.
- You can overwrite single variants of the variable with other colors or opacities.

Try it yourself: https://play.tailwindcss.com/19SLgiXbMN

![hierarchy and subvalues code example](https://user-images.githubusercontent.com/26542182/221135288-682e5028-7b2d-4760-8680-3dd4b3951e97.png)

### Example 3: Sizes

- Besides color variables you can set variables for spacings.
- You can use the variables for width, height, margins etc.
- Since version 2.1.0 you can use the variables for fontSize, too.

Try it yourself: https://play.tailwindcss.com/70ezDS1hIy

![size code example](https://user-images.githubusercontent.com/26542182/221134417-007611dc-d3d3-4567-b799-5bb61079e84e.png)

### Example 4: Arbitrary values

- You can set and use arbitrary values for both spacings and colors.
- In the example height and roundedness resize perfectly with the width of the object.

Try it yourself: https://play.tailwindcss.com/0r55inbvBq

![arbitrary values example](https://user-images.githubusercontent.com/26542182/221136127-116b7e84-c12e-4263-89a3-9f8030943a71.png)

## Modify color variables

Out of the box, the plugin extends your theme with the following color and spacing.

```js
{
  theme: {
    extend: {
      colors: {
        'varcolor': {
          50: 'var(--tw-varcolor-50)',
          100: 'var(--tw-varcolor-100)',
          200: 'var(--tw-varcolor-200)',
          300: 'var(--tw-varcolor-300)',
          400: 'var(--tw-varcolor-400)',
          500: 'var(--tw-varcolor-500)',
          600: 'var(--tw-varcolor-600)',
          700: 'var(--tw-varcolor-700)',
          800: 'var(--tw-varcolor-800)',
          900: 'var(--tw-varcolor-900)',
        },
      },
      spacing: {
        'varspacing': 'var(--tw-varspacing)',
      },
    },
  }
}
```

If you have other color definitions which you want to use with variables, just change the `varcolor`-definitions in your theme e. g.:

```js
{
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FF88DD',
          dark: '#FFFF00',
        }
        secondary: {
          light: 'FF88FF',
          dark: '#FF00FF',
        }
        'varcolor': {
          light: 'var(--tw-varcolor-light)',
          dark: 'var(--tw-varcolor-dark)',
        },
      },
    },
  }
}
```
