import React from 'react';
import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';

// TYPES
import { CurrencyInputProps } from 'react-currency-input-field/dist/components/CurrencyInputProps';

// STYLES
import { toREM } from '~/styles/functions';
import { breakpointMin } from '~/styles/mixins';
import { COLOR, SPACING } from '~/styles/variables';

interface StyledInputProps {
  $withIcon?: boolean;
}

type StyledCurrencyInputProps = React.ComponentType<
  StyledInputProps & CurrencyInputProps
>;

export const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${SPACING['2xs']};
  background-color: ${COLOR.neutralWhite};

  svg {
    position: absolute;
    width: ${SPACING.md};
    color: ${COLOR.blueGray100};
    top: 50%;
    left: ${toREM('12px')};
    transform: translateY(-50%);
    z-index: 0;
  }
`;

export const StyledInput = styled<StyledCurrencyInputProps>(CurrencyInput)`
  position: relative;
  width: 100%;
  height: ${toREM('56px')};
  padding: 0 ${SPACING.xs};
  padding-left: ${props => (props.$withIcon ? toREM('44px') : SPACING.xs)};
  font-family: Rubik, sans-serif;
  font-size: ${toREM('20px')};
  font-weight: bold;
  color: ${COLOR.blueGray600};
  border-radius: ${SPACING['2xs']};
  border: solid 1px ${COLOR.blueGray50};
  background-color: transparent;
  outline: none;
  z-index: 1;

  ::placeholder {
    color: ${COLOR.blueGray100};
    font-weight: normal;
  }

  &:focus {
    border-color: ${COLOR.blueGray300};
  }

  ${breakpointMin.lg`
    font-size: ${toREM('24px')};
  `}
`;
