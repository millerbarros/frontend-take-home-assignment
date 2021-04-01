import styled, { css } from 'styled-components';

// STYLES
import { toREM } from '~/styles/functions';
import { breakpointMin } from '~/styles/mixins';
import { COLOR, SPACING } from '~/styles/variables';

interface ContainerProps {
  $focussed: boolean;
}

interface ControllerProps {
  $disabled?: boolean;
}

export const StyledHiddenButton = styled.button`
  width: 0;
  height: 0;
  opacity: 0;
  padding: 0;
  margin: 0;
  outline: 0;
  border: none;
`;

export const StyledMonthInputContainer = styled.div<ContainerProps>`
  display: flex;
  border-radius: ${SPACING['2xs']};
  border-style: solid;
  border-width: 1px;
  border-color: ${props =>
    props.$focussed ? COLOR.blueGray300 : COLOR.blueGray50};
  background-color: ${COLOR.neutralWhite};
  height: ${toREM('56px')};
`;

export const StyledMonthInputContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 ${SPACING.md};
`;

export const StyledMonthInputController = styled.button<ControllerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${toREM('48px')};
  height: 100%;
  padding: 0;
  border: none;
  background: transparent;
  outline: none;
  color: ${props => (props.$disabled ? COLOR.blueGray50 : COLOR.blueGray300)};
  cursor: ${props => (props.$disabled ? 'default' : 'pointer')};

  svg {
    width: ${toREM('8px')};
  }

  ${props => {
    if (props.$disabled) return null;

    return css`
      &:hover {
        color: ${COLOR.blueGray600};
      }
    `;
  }}

  ${breakpointMin.lg`
    font-size: ${toREM('16px')};
    line-height: ${toREM('24px')};
  `}
`;

export const StyledMonthInputMonth = styled.div`
  color: ${COLOR.blueGray900};
  font-size: ${toREM('14px')};
  line-height: ${toREM('21px')};
  font-weight: bold;

  ${breakpointMin.lg`
    font-size: ${toREM('16px')};
    line-height: ${toREM('24px')};
  `}
`;

export const StyledMonthInputYear = styled.div`
  color: ${COLOR.blueGray300};
  font-size: ${toREM('14px')};
  line-height: ${toREM('21px')};

  ${breakpointMin.lg`
    font-size: ${toREM('16px')};
    line-height: ${toREM('24px')};
  `}
`;
