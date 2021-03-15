import styled from 'styled-components';

// STYLES
import { toREM } from '~/styles/functions';
import { breakpointMin } from '~/styles/mixins';
import { HEADER, SPACING } from '~/styles/variables';

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: ${HEADER.small.height};
  padding-bottom: ${SPACING.lg};
  margin: 0 auto;

  ${breakpointMin.md`
    max-width: ${toREM('580px')};
  `}

  ${breakpointMin.lg`
    padding-top: ${HEADER.large.height};
  `}
`;
