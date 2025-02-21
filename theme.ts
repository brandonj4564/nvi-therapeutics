'use client';

import { createTheme, rem } from '@mantine/core';

// export const theme = createTheme({
//   /* Put your mantine theme override here */
//   primaryColor: '#33B2A6',
//   defaultRadius: 'lg',
// });

export const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },

  primaryColor: 'primaryColor',

  colors: {
    'primaryColor': [ // The teal color
      "#e0fffd",
      "#cffaf6",
      "#a5f2ea",
      "#77eade",
      "#52e3d4",
      "#38dfce",
      "#24ddcb",
      "#06c4b3",
      "#00ae9f",
      "#009789"
    ],
    darkColor: [
      "#f4f5f6",
      "#e8e8e8",
      "#cecece",
      "#b2b3b4",
      "#999d9e",
      "#898f92",
      "#7f888c",
      "#6c7579",
      "#3a4f59", // dark color, from Figma, access through "darkColor.8"
      "#2f383c" // darkest color, from Figma
    ],
    lightColor: [
      "#ebfffd", // light color
      "#d7fdf9",
      "#a9fdf3",
      "#7bfded",
      "#5dfde7",
      "#50fde4",
      "#48fde3",
      "#3be1c9",
      "#2bc8b2",
      "#00ad99"
    ],
    lightestColor:
      [
        "#f5f5f5", // lightest color
        "#e7e7e7",
        "#cdcdcd",
        "#b2b2b2",
        "#9a9a9a",
        "#8b8b8b",
        "#848484",
        "#717171",
        "#656565",
        "#575757"
      ]

  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  fontSizes: {
    xs: "14px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "30px",
    xxl: "36px"
  },

  fontFamily: 'Poppins, sans-serif',

  headings: {
    fontFamily: 'Optimus Princeps, serif',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});
