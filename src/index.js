const plugin = require('tailwindcss/plugin')

const tailwindcssVar = plugin(
  function ({ matchUtilities, theme }) {
    if (theme('colors.var', {})) {
      const variablesPalette = Object.keys(theme('colors.var', {}))

      /*
       * Set one-level variables like var-red, var-indigo, var-[pink] etc.
       */

      matchUtilities(
        {
          var: (color) => {
            if (typeof color === 'string') {
              const output = {}
              variablesPalette.map((variant) => {
                output[`--tw-var-color-${variant}`] = color
              })
              return output
            } else {
              const output = {}
              variablesPalette.map((variant) => {
                if (color[variant]) {
                  output[`--tw-var-color-${variant}`] = color[variant]
                } else if (color['DEFAULT']) {
                  output[`--tw-var-color-${variant}`] = color['DEFAULT']
                }
              })
              return output
            }
          },
        },
        { values: theme('colors', {}), type: 'color' }
      )

      /*
       * Set two-level variables like var-50-red, var-100-indigo, var-50-[pink] etc.
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
            [`var-${variant}`]: (value) => ({
              [`--tw-var-color-${variant}`]: value,
            }),
          },
          { values: getTransformedColors(variant), type: 'color' }
        )
      })
    }

    /*
     * Set spacing variables like var-spacing-2 etc. to be used with h-var, w-var, m-var etc.
     *
     * It would have been nicer to just use "var-2" instead of "var-spacing-2" to set the variable.
     * Unfortunately this would collide with color variables when setting arbitrary values.
     *
     * Furthermore it would have been nicer to use "size" instead of "spacing",
     * but I want to stick to the official Tailwind terminology.
     */

    if (theme('spacing.var', {})) {
      matchUtilities(
        {
          'var-spacing': (spacing) => ({
            '--tw-var-spacing': spacing,
          }),
        },
        { values: theme('spacing', {}) }
      )
    }
  },
  {
    theme: {
      extend: {
        spacing: {
          var: 'var(--tw-var-spacing)',
        },
      },
    },
  }
)

module.exports = tailwindcssVar
