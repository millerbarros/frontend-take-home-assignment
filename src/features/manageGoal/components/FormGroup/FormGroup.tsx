import React, { HTMLAttributes } from 'react';

// STYLED COMPONENTS
import { StyledFormGroup, StyledFormGroupLabel } from './FormGroup.styles';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string;
  htmlFor?: string;
}

export const FormGroup = ({
  label,
  htmlFor,
  children,
  ...restProps
}: Props) => {
  return (
    <StyledFormGroup {...restProps}>
      <StyledFormGroupLabel title={label} htmlFor={htmlFor}>
        {label}
      </StyledFormGroupLabel>

      {children}
    </StyledFormGroup>
  );
};
