# tailwindcss-var

This plugin allows to create and use scoped CSS variables for colors and spacings in your Tailwind CSS project.

For live-examples check out [mariohamann.de/tailwindcss-var](https://mariohamann.de/tailwindcss-var).

## Please read ❤️
- ⚠️ This plugin expects you to use Tailwind CSS >2.0 || >3.0 with JIT mode enabled.  (Tested only with >3.0)
- This is the first version of the plugin. Please be aware of changes in future.
- The plugin works best with the default color variations of Tailwind CSS (50, 100, ..., 800, 900). If you want to use other variable variations, you'll find some basic instructions below.
## Installation

1. Add package to your project e. g. `npm install @mariohamann/tailwindcss-var`.
2. Add the plugin to your `tailwind.config.js` with `require('@mariohamann/tailwindcss-var')`.
3. Add the following color variables to your `tailwind.config.js` (or change them to your needs as described [below](#modify-color-variables)):

```js
{
  theme: {
    extend: {
      colors: {
        var: {
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

4. To test if everything works, add the following classes to an object with text `var-indigo text-var-500`.
## Examples
### Example 1: Basic color change

1. Define your object once with text-var-600, bg-var-50 etc.
2. Fill the variable (dynamically) with e. g. var-pink.
3. text-var-600 renders as text-pink-600, bg-var-50 renders as bg-pink-50.

Try it yourself: https://play.tailwindcss.com/8IoJCK0r1t.

![tailwindcss-var netlify app_ (8)](https://user-images.githubusercontent.com/26542182/152775017-8ef5048b-190b-4568-9b8a-1bbdeed71a8b.png)


```html
<button class="var-... text-var-600 bg-var-50 border-var-600 hover:bg-var-100 focus:ring-var-500 ...">...</button>
```

### Example 2: Hierarchy and subvalues

- Variables are automatically consumable by every child element.
- You can overwrite variables in every child.
- You can overwrite single variants of the variable with other colors or opacities.

Try it yourself: https://play.tailwindcss.com/fQPslGpLCw

![tailwindcss-var netlify app_ (7)](https://user-images.githubusercontent.com/26542182/152775079-41abeb53-c3f5-4cae-a187-ca14bf189695.png)


```html
<div class="var-...">
  <button class="text-white bg-var-600 border-var-800 hover:bg-var-700 focus:ring-var-500 ...">...</button>
  <button class="text-var-600 bg-var-50 border-var-600 hover:bg-var-100 focus:ring-var-500 ...">...</button>
  <button class="text-var-600 bg-var-50 border-var-50 hover:bg-var-100 focus:ring-var-500 ...">...</button>
  <button class="var-600-.../20 text-var-600 bg-var-50 border-var-50 ..." Disabled>...</button>
</div>
```

### Example 3: Sizes

- Besides color variables you can set variables for spacings.
- You can use the variables for width, height, margins etc.

Try it yourself: https://play.tailwindcss.com/ojWbNZGdMY

![tailwindcss-var netlify app_ (5)](https://user-images.githubusercontent.com/26542182/152775109-7f923575-36b6-4d88-91ee-7e242ec0e732.png)


```html
<div class="var-spacing-... w-var h-var ...">...</button>
```

### Example 4: Arbitrary values
- You can set and use arbitrary values for both spacings and colors.
- In the example height and roundedness resize perfectly with the width of the object.

Try it yourself: https://play.tailwindcss.com/ETCMSUlWiv

![tailwindcss-var netlify app_ (6)](https://user-images.githubusercontent.com/26542182/152775129-7e00e1e4-cb96-485d-bc28-40c6001bde6b.png)


## Modify color variables
If you use Tailwind's default color definitions, your theme should be extended with the following (as described above):

```js
{
  theme: {
    extend: {
      colors: {
        var: {
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

If you have other color definitions which you want to use with variables, just extend the `var`-definitions in your theme e. g.: 

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
        var: {
          light: 'var(--tw-var-color-light)',
          dark: 'var(--tw-var-color-dark)',
        },
      },
    },
  }
}
```

In the future the plugin will set overwritable default color variables.
