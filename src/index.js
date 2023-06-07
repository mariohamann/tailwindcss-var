const plugin = require('tailwindcss/plugin')

const tailwindcssVar = plugin(
  function ({ matchUtilities, theme }) {
    if (theme('colors.varcolor', {})) {
      const variablesPalette = Object.keys(theme('colors.varcolor', {}))

      /*
       * Set one-level variables like varcolor-red, varcolor-indigo, varcolor-[pink] etc.
       */

      matchUtilities(
        {
          varcolor: (color) => {
            if (typeof color === 'string') {
              const output = {}
              variablesPalette.map((variant) => {
                output[`--tw-varcolor-${variant}`] = color
              })
              return output
            } else {
              const output = {}
              variablesPalette.map((variant) => {
                if (color[variant]) {
                  output[`--tw-varcolor-${variant}`] = color[variant]
                } else if (color['DEFAULT']) {
                  output[`--tw-varcolor-${variant}`] = color['DEFAULT']
                }
              })
              return output
            }
          },
        },
        { values: theme('colors', {}), type: 'color' }
      )

      /*
       * Set two-level variables like varcolor-50-red, varcolor-100-indigo, varcolor-50-[pink] etc.
       * We need to transform the color palette from format "color.shade" to "shade.color"
       * Examples:
       * - red.50 ... red.900  ->  50.red   ... 900.red
       * - black               ->  50.black ... 900.black
       */

      const colorsAsEntries = Object.entries(theme('colors', {}))

      const getTransformedColors = (variant) => {
        const transformedColors = {}
        colorsAsEntries.map(([key, value]) => {
          if (typeof value === 'string') {
            transformedColors[key] = value
          } else {
            if (value[variant]) {
              transformedColors[key] = value[variant]
            } else if (value['DEFAULT']) {
              transformedColors[key] = value['DEFAULT']
            }
          }
        })
        return transformedColors
      }

      variablesPalette.map((variant) => {
        matchUtilities(
          {
            [`varcolor-${variant}`]: (value) => ({
              [`--tw-varcolor-${variant}`]: value,
            }),
          },
          { values: getTransformedColors(variant), type: 'color' }
        )
      })
    }

    /*
     * Set spacing variables like varspacing-2 etc. to be used with h-varspacing, w-varspacing, m-varspacing etc.
     *
     * It would be nicer to use "size" instead of "spacing",
     * but I want to stick to the official Tailwind terminology.
     */

    if (theme('spacing.varspacing', {})) {
      matchUtilities(
        {
          varspacing: (spacing) => ({
            '--tw-varspacing': spacing,
          }),
        },
        { values: theme('spacing', {}) }
      )
    }
  },
  {
    theme: {
      extend: {
        colors: {
          varcolor: {
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
            950: 'var(--tw-varcolor-950)',
          },
        },
        spacing: {
          varspacing: 'var(--tw-varspacing)',
        },
        fontSize: {
          varspacing: 'var(--tw-varspacing)',
        }
      },
    },
  }
)

module.exports = tailwindcssVar
