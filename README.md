# tailwindcss-var

This plugin allows to create and use scoped CSS variables for colors and spacings in your Tailwind CSS project.

For live-examples check out [mariohamann.de/tailwindcss-var](https://mariohamann.de/tailwindcss-var).

## Please read ❤️
- ⚠️ This plugin expects you to use Tailwind CSS >2.0 || >3.0 with JIT mode enabled.  (Tested only with >3.0)
- Although this plugin has version "1.x", this is still beta. (I switched to 1.x to mark breaking changes). Please be aware of changes in future. Neverthessless it's already tested in production and works well.
- The plugin works best with the default color variations of Tailwind CSS (50, 100, ..., 800, 900). If you want to use other variable variations, you'll find some basic instructions below.
## Installation

1. Add package to your project e. g. `npm install @mariohamann/tailwindcss-var`.
2. Add the plugin to your `tailwind.config.js` with `require('@mariohamann/tailwindcss-var')`.
3. Add the following variables to your `tailwind.config.js` (or change them to your needs as described [below](#modify-color-variables)):

```js
{
  theme: {
    extend: {
      colors: {
        '$color': {
          50: 'var(--tw-var-color-50)',
          100: 'var(--tw-var-color-100)',
          200: 'var(--tw-var-color-200)',
          300: 'var(--tw-var-color-300)',
          400: 'var(--tw-var-color-400)',
          500: 'var(--tw-var-color-500)',
          600: 'var(--tw-var-color-600)',
          700: 'var(--tw-var-color-700)',
          800: 'var(--tw-var-color-800)',
          900: 'var(--tw-var-color-900)',
        },
      },
      spacing: {
        '$spacing': 'var(--tw-var-spacing)',
      }
    },
  }
}
```

4. To test if everything works, add the following classes to an object with text `$color-indigo text-$color-500`.
## Examples
### Example 1: Basic color change

1. Define your object once with text-$color-600, bg-$color-50 etc.
2. Fill the variable (dynamically) with e. g. $color-pink.
3. text-$color-600 renders as text-pink-600, bg-$color-50 renders as bg-pink-50.

Try it yourself: https://play.tailwindcss.com/N5naigtioP.

![basic color change code example](https://user-images.githubusercontent.com/26542182/167074119-78a15e41-a616-4c8c-98b0-4adb48a28f4e.png)

### Example 2: Hierarchy and subvalues

- Variables are automatically consumable by every child element.
- You can overwrite variables in every child.
- You can overwrite single variants of the variable with other colors or opacities.

Try it yourself: https://play.tailwindcss.com/dConxwIewE

![hierarchy and subvalues code example](https://user-images.githubusercontent.com/26542182/167074118-f38d3034-da51-45b6-b282-ee55627a42e1.png)

### Example 3: Sizes

- Besides color variables you can set variables for spacings.
- You can use the variables for width, height, margins etc.

Try it yourself: https://play.tailwindcss.com/wGAq28JlDL

![size code example](https://user-images.githubusercontent.com/26542182/167074116-9c294a1f-ecf5-4e5e-bd31-e6f809d3cea9.png)


### Example 4: Arbitrary values
- You can set and use arbitrary values for both spacings and colors.
- In the example height and roundedness resize perfectly with the width of the object.

Try it yourself: https://play.tailwindcss.com/0DDoIx5AvB

![arbitrary values example](https://user-images.githubusercontent.com/26542182/167074114-c848e93a-64b8-49f3-bef4-ea924e3611cd.png)

## Modify color variables
If you use Tailwind's default color definitions, your theme should be extended with the following (as described above):

```js
{
  theme: {
    extend: {
      colors: {
        '$color': {
          50: 'var(--tw-var-color-50)',
          100: 'var(--tw-var-color-100)',
          200: 'var(--tw-var-color-200)',
          300: 'var(--tw-var-color-300)',
          400: 'var(--tw-var-color-400)',
          500: 'var(--tw-var-color-500)',
          600: 'var(--tw-var-color-600)',
          700: 'var(--tw-var-color-700)',
          800: 'var(--tw-var-color-800)',
          900: 'var(--tw-var-color-900)',
        },
      },
    },
  }
}
```

If you have other color definitions which you want to use with variables, just change the `$color`-definitions in your theme e. g.: 

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
        '$color': {
          light: 'var(--tw-var-color-light)',
          dark: 'var(--tw-var-color-dark)',
        },
      },
    },
  }
}
```

In the future the plugin will set overwritable default color variables.
