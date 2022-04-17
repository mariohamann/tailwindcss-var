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
3. Add the following color variables to your `tailwind.config.js` (or change them to your needs as described [below](#modify-color-variables)):

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

4. To test if everything works, write somewhere e. g. with `var-indigo text-var-500`.
## Examples
### Example 1: Basic color change
Every button shares the same classes besides the class var-... which is filled by var-sky, var-green etc.

<img width="635" alt="Screen Shot 2022-02-06 at 22 46 04" src="https://user-images.githubusercontent.com/26542182/152702725-3a6b8821-fc90-4325-bed2-b184058b662f.png">

```html
<button class="$color-... text-$color-600 bg-$color-50 border-$color-600 hover:bg-$color-100 focus:ring-$color-500 ...">...</button>
```

### Example 2: Hierarchy and subvalues

The buttons in the first, second and third row share the exact same styles, only the var-... of the parent changes. You can set new variable scopes everywhere. It's even possible to set new variables for only one variable variant (e. g. var-600-...) to refine its color or opacity.

<img width="635" alt="Screen Shot 2022-02-06 at 22 45 44" src="https://user-images.githubusercontent.com/26542182/152702727-5fb169bc-5754-4651-9c46-06c59626a917.png">

```html
<div class="$color-...">
  <button class="text-white bg-$color-600 border-$color-800 hover:bg-$color-700 focus:ring-$color-500 ...">...</button>
  <button class="text-$color-600 bg-$color-50 border-$color-600 hover:bg-$color-100 focus:ring-$color-500 ...">...</button>
  <button class="text-$color-600 bg-$color-50 border-$color-50 hover:bg-$color-100 focus:ring-$color-500 ...">...</button>
  <button class="$color-600-.../20 text-$color-600 bg-$color-50 border-$color-50 ..." Disabled>...</button>
</div>
```

### Example 3: Sizes
The divs share the exact same styles, only the variable $spacing-... is filled by $spacing-8, $spacing-12 etc.

<img width="635" alt="Screen Shot 2022-02-06 at 22 46 19" src="https://user-images.githubusercontent.com/26542182/152702724-7b52e18a-6821-42ca-add9-7c7320ee27b0.png">

```html
<div class="$spacing-... w-$spacing h-$spacing ...">...</button>
```

### Example 4: Arbitrary values
You can use arbitrary values as well for setting as for getting variables. In the example height and roundedness resize perfectly with the element's width.

<img width="635" alt="Screen Shot 2022-02-06 at 22 46 39" src="https://user-images.githubusercontent.com/26542182/152702722-e981a907-b94d-4cce-b7c2-1e5fdc92d93a.png">

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

If have other color definitions you want to use with variables, just extend the `var`-definitions in your theme e. g.: 

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
