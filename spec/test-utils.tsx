import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider theme={{ mode: 'light' }}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
