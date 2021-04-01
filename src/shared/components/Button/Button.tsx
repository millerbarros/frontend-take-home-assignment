import React, { HTMLAttributes } from 'react';

// STYLED COMPONENTS
import { StyledButton } from './Button.styles';

export const Button = (props: HTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...props} />;
};
