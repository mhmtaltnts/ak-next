'use client';

import { ThemeProvider as NextThemsProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemsProvider {...props}>{children}</NextThemsProvider>;
};
