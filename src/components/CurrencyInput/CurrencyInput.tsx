import React, { HTMLAttributes, useEffect } from 'react';

// STYLED COMPONENTS
import { StyledInputContainer, StyledInput } from './CurrencyInput.styles';

interface Props
  extends Omit<
    HTMLAttributes<HTMLInputElement>,
    'defaultValue' | 'value' | 'onChange'
  > {
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  onChange: (value: string) => void;
  value: string;
}

const CURRENCY_REGEX = /^[0-9]+(\.[0-9]{2})?$/;

export const CurrencyInput = ({
  icon: Icon,
  value,
  onChange,
  ...restProps
}: Props) => {
  const hasIcon = !!Icon;

  useEffect(() => {
    if (!value || CURRENCY_REGEX.test(value)) return;

    if (value.includes(',')) {
      return onChange(value.replace(/,/g, ''));
    }

    if (!Number.isNaN(Number(value))) return;

    onChange('');
  }, [value, onChange]);

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
        onValueChange={value => onChange(value || '')}
        value={value}
        {...restProps}
      />
    </StyledInputContainer>
  );
};
