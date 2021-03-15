import styled from 'styled-components';

// STYLES
import { toREM } from '~/styles/functions';
import { COLOR, SPACING } from '~/styles/variables';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${toREM('320px')};
  height: ${toREM('56px')};
  padding: 0 ${SPACING.md};
  color: ${COLOR.neutralWhite};
  font-size: ${toREM('16px')};
  font-weight: bold;
  line-height: ${toREM('20px')};
  border: none;
  border-radius: ${toREM('32px')};
  background-color: ${COLOR.brandPrimaryColor};
  outline: none;
  cursor: pointer;
`;
