const plugin = require('tailwindcss/plugin')

const tailwindcssVar = plugin(
  function ({ matchUtilities, theme }) {
    if (theme('colors.$color', {})) {
      const variablesPalette = Object.keys(theme('colors.$color', {}))

      /*
       * Set one-level variables like $color-red, $color-indigo, $color-[pink] etc.
       */

      matchUtilities(
        {
          '$color': (color) => {
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
       * Set two-level variables like $color-50-red, $color-100-indigo, $color-50-[pink] etc.
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
            [`$color-${variant}`]: (value) => ({
              [`--tw-var-color-${variant}`]: value,
            }),
          },
          { values: getTransformedColors(variant), type: 'color' }
        )
      })
    }

    /*
     * Set spacing variables like $spacing-2 etc. to be used with h-$spacing, w-$spacing, m-$spacing etc.
     *
     * It would be nicer to use "size" instead of "spacing",
     * but I want to stick to the official Tailwind terminology.
     */

    if (theme('spacing.var', {})) {
      matchUtilities(
        {
          '$spacing': (spacing) => ({
            '--tw-var-spacing': spacing,
          }),
        },
        { values: theme('spacing', {}) }
      )
    }
  },
  {
    theme: {
      spacing: {
        ...theme('spacing'),
        '$spacing': 'var(--tw-var-spacing)',
      }
    },
  }
)

module.exports = tailwindcssVar
