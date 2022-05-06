# tailwindcss-var

This plugin allows to create and use scoped CSS variables for colors and spacings in your Tailwind CSS project.

For live-examples check out [mariohamann.de/tailwindcss-var](https://mariohamann.de/tailwindcss-var).

## Please read ❤️
- ⚠️ This plugin expects you to use Tailwind CSS >2.0 || >3.0 with JIT mode enabled.
- This is the second version of the plugin. Please be aware of changes in future.
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

4. To test if everything works, write somewhere e. g. with `$color-indigo text-$color-500`.
## Examples
### Example 1: Basic color change
Every button shares the same classes besides the class $color-... which is filled by $color-sky, $color-green etc.

<img width="635" alt="Screen Shot 2022-02-06 at 22 46 04" src="https://user-images.githubusercontent.com/26542182/167073577-8e512e0c-6d92-460f-9928-df7584f869db.png">

```html
<button class="$color-... text-$color-600 bg-$color-50 border-$color-600 hover:bg-$color-100 focus:ring-$color-500 ...">...</button>
```

### Example 2: Hierarchy and subvalues

The buttons in the first, second and third row share the exact same styles, only the $color-... of the parent changes. You can set new variable scopes everywhere. It's even possible to set new variables for only one variable variant (e. g. $color-600-...) to refine its color or opacity.

<img width="635" alt="Screen Shot 2022-02-06 at 22 45 44" src="https://user-images.githubusercontent.com/26542182/167073576-3eb094f0-5d71-4692-b258-3658484c4034.png">

```html
<div class="$color-...">
  <button class="text-white bg-$color-600 border-$color-800 hover:bg-$color-700 focus:ring-$color-500 ...">...</button>
  <button class="text-$color-600 bg-$color-50 border-$color-600 hover:bg-$color-100 focus:ring-$color-500 ...">...</button>
  <button class="text-$color-600 bg-$color-50 border-$color-50 hover:bg-$color-100 focus:ring-$color-500 ...">...</button>
  <button class="$color-600-.../20 text-$color-600 bg-$color-50 border-$color-50 ..." disabled>...</button>
</div>
```

### Example 3: Sizes
The divs share the exact same styles, only the variable $spacing-... is filled by $spacing-8, $spacing-12 etc.

<img width="635" alt="Screen Shot 2022-02-06 at 22 46 19" src="https://user-images.githubusercontent.com/26542182/167073575-22322e03-9dc4-4f8d-b18b-07e61f8d95f2.png">

```html
<div class="$spacing-... w-$spacing h-$spacing ...">...</button>
```

### Example 4: Arbitrary values
You can use arbitrary values as well for setting as for getting variables. In the example height and roundedness resize perfectly with the element's width.

<img width="635" alt="Screen Shot 2022-02-06 at 22 46 39" src="https://user-images.githubusercontent.com/26542182/167073573-6c8425dd-56e9-4f88-8333-b0cb200b4c57.png">

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

If have other color definitions you want to use with variables, just extend the `$color`-definitions in your theme e. g.: 

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

In the future the plugin will set default color variables which you'll be able to overwrite.
