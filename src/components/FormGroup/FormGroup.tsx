import React, { PropsWithChildren } from 'react';

// STYLED COMPONENTS
import { StyledFormGroup, StyledFormGroupLabel } from './FormGroup.styles';

interface Props {
  label: string;
  htmlFor?: string;
}

export const FormGroup = ({
  children,
  label,
  htmlFor
}: PropsWithChildren<Props>) => {
  return (
    <StyledFormGroup>
      <StyledFormGroupLabel title={label} htmlFor={htmlFor}>
        {label}
      </StyledFormGroupLabel>

      {children}
    </StyledFormGroup>
  );
};
