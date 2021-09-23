import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';

export default function ContactPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        
      </StickyProvider>
    </ThemeProvider>
  );
}
