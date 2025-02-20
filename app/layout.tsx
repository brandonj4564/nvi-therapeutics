import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import Header from '@/components/Header';
import '../globals.css'

export const metadata = {
  title: 'NVI Therapeutics',
  description: 'Revolutionizing the future of gene therapy',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/nvi-logo.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme='light' forceColorScheme='light'>
          <Header/>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
