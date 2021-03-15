import React, { HTMLAttributes } from 'react';

// STYLED COMPONENTS
import { StyledInputContainer, StyledInput } from './CurrencyInput.styles';

interface Props
  extends Omit<
    HTMLAttributes<HTMLInputElement>,
    'defaultValue' | 'value' | 'onChange'
  > {
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  onChange?: (value?: string) => void;
  defaultValue?: string;
  value?: string;
}

export const CurrencyInput = ({
  icon: Icon,
  value,
  onChange,
  ...restProps
}: Props) => {
  const hasIcon = !!Icon;

  return (
    <StyledInputContainer>
      {Icon && <Icon />}

      <StyledInput
        decimalsLimit={2}
        decimalSeparator="."
        groupSeparator=","
        allowNegativeValue={false}
        decimalScale={value?.includes('.') ? 2 : 0}
        maxLength={15}
        $withIcon={hasIcon}
        onValueChange={onChange}
        value={value}
        {...restProps}
      />
    </StyledInputContainer>
  );
};
