import React, { PropsWithChildren } from 'react';

// COMPONENTS
import { Header } from '~/components/Header';

// STYLED COMPONENTS
import { StyledMain } from './DefualtLayout.styles';

export const DefaultLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
};
