import styled from 'styled-components';

// STYLES
import { toREM } from '~/styles/functions';
import { breakpointMin, textEllipsis } from '~/styles/mixins';
import { COLOR, SPACING } from '~/styles/variables';

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCardHeaderMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  min-width: 0; /* Allows text-overflow to works with display: flex; */
`;

export const StyledCardHeaderLeftContent = styled.div`
  max-width: ${toREM('64px')};

  svg {
    width: 100%;
  }

  & + ${StyledCardHeaderMainContent} {
    padding-left: ${SPACING.sm};
  }
`;

export const StyledCardHeaderTitle = styled.h2`
  margin: 0;
  font-family: Rubik, sans-serif;
  font-size: ${toREM('20px')};
  font-weight: bold;
  color: ${COLOR.blueGray900};

  ${textEllipsis()}

  ${breakpointMin.lg`
    font-size: ${toREM('24px')};
  `}
`;

export const StyledCardHeaderSubtitle = styled.p`
  margin: ${SPACING['2xs']} 0 0;
  font-size: ${toREM('14px')};
  color: ${COLOR.blueGray400};

  ${textEllipsis()}

  ${breakpointMin.lg`
    font-size: ${toREM('16px')};
  `}
`;
