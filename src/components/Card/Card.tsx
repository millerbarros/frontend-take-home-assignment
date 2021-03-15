import React, { PropsWithChildren } from 'react';

// STYLED COMPONENTS
import { StyledCard } from './Card.styles';

export const Card = ({ children }: PropsWithChildren<{}>) => {
  return <StyledCard>{children}</StyledCard>;
};
