import React from 'react';

// COMPONENTS
import { Header } from '~/shared/components/Header';

// TYPES
import { DefaultLayoutProps } from './types';

// STYLED COMPONENTS
import { StyledMain } from './DefualtLayout.styles';

export const DefaultLayout = ({
  children,
  large = false
}: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      <StyledMain large={large}>{children}</StyledMain>
    </>
  );
};
