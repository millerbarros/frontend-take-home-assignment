import styled from 'styled-components';

// STYLES
import { toREM } from '~/styles/functions';
import { breakpointMin } from '~/styles/mixins';
import { SPACING, HEADER } from '~/styles/variables';

// ASSETS
import Logo from '~/assets/icons/logo.svg';

export const StyledHeader = styled.header`
  /* position: fixed; */
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: ${HEADER.small.height};
  padding: 0 ${SPACING.sm};

  ${breakpointMin.lg`
    height: ${HEADER.large.height};
    padding: 0 ${SPACING['2xl']};
  `}
`;

export const StyledLogo = styled(Logo)`
  width: ${toREM('75px')};
`;
