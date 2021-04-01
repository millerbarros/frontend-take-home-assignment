import React, { HTMLAttributes } from 'react';

// STYLED COMPONENTS
import { StyledCard } from './Card.styles';

type Props = HTMLAttributes<HTMLDivElement>;

export const Card = (props: Props) => {
  return <StyledCard {...props} />;
};
