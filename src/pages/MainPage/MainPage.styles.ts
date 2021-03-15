import styled from 'styled-components';

// COMPONENTS
import { Button } from '~/components/Button';
import { InfoPanel } from '~/components/InfoPanel';

// STYLES
import { toREM } from '~/styles/functions';
import { breakpointMin } from '~/styles/mixins';
import { COLOR, SPACING } from '~/styles/variables';

export const StyledPageTitle = styled.h1`
  width: 100%;
  color: ${COLOR.brandPrimaryColor};
  margin: 0;
  padding: ${SPACING.lg} ${SPACING.md} ${SPACING.md};
  font-size: ${toREM('20px')};
  font-weight: normal;
  text-align: center;

  ${breakpointMin.lg`
    font-size: ${toREM('18px')};
    padding: ${SPACING.xl} ${SPACING.md} ${SPACING.md};
  `}
`;

export const StyledMainPageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${SPACING.sm};
  margin: 0 0 ${SPACING.md};

  ${breakpointMin.lg`
    padding-top: ${SPACING.md};
  `}
`;

export const StyledMainPageFormGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${SPACING.sm};

  ${breakpointMin.md`
    grid-template-columns: 1.12fr .88fr;
  `}
`;

export const StyledInfoPanel = styled(InfoPanel)`
  margin-top: ${SPACING.md};
`;

export const StyledButton = styled(Button)`
  margin-top: ${SPACING.lg};

  ${breakpointMin.md`
    max-width: ${toREM('320px')};
  `}
`;
