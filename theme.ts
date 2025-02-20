'use client';

import { createTheme, rem } from '@mantine/core';

// export const theme = createTheme({
//   /* Put your mantine theme override here */
//   primaryColor: '#33B2A6',
//   defaultRadius: 'lg',
// });

export const theme = createTheme({
  colors: {
    // Add your color
    primaryColor: [
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
    // or replace default theme color
    blue: [
      '#eef3ff',
      '#dee2f2',
      '#bdc2de',
      '#98a0ca',
      '#7a84ba',
      '#6672b0',
      '#5c68ac',
      '#4c5897',
      '#424e88',
      '#364379',
    ],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  fontFamily: 'Poppins, sans-serif',

  headings: {
    fontFamily: 'Optimus Princeps, serif',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});
