import styled from 'styled-components';

// STYLES
import { toREM } from '~/styles/functions';
import { breakpointMin, textEllipsis } from '~/styles/mixins';
import { COLOR, SPACING } from '~/styles/variables';

export const StyledInfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledInfoPanelHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${toREM('78px')};
  padding: 0 ${SPACING.md};
  background-color: ${COLOR.neutralWhite};
  border-radius: ${toREM('8px')} ${toREM('8px')} 0 0;
  border: solid 1px ${COLOR.blueGray50};
  border-bottom: none;
  min-width: 0; /* Allows text-overflow to works with display: flex; */

  ${breakpointMin.lg`
    padding: 0 ${SPACING.lg};
  `}
`;

export const StyledInfoPanelContent = styled.div`
  width: 100%;
  height: ${toREM('78px')};
  padding: ${SPACING.md} ${SPACING.lg};
  font-size: ${toREM('12px')};
  background-color: ${COLOR.blueGray10};
  border: solid 1px ${COLOR.blueGray50};
  border-top: none;
  border-radius: 0 0 ${toREM('8px')} ${toREM('8px')};
  text-align: center;

  ${breakpointMin.lg`
    text-align: left;
  `}
`;

export const StyledInfoPanelTitle = styled.h3`
  flex: 1;
  font-size: ${toREM('18px')};
  font-weight: normal;
  margin: 0;
  padding: 0;

  ${textEllipsis()}

  ${breakpointMin.lg`
  font-size: ${toREM('20px')};
`}
`;

export const StyledInfoPanelHighlight = styled.div`
  padding-left: ${SPACING.md};
  color: ${COLOR.brandColorSecondary};
  font-family: Rubik, sans-serif;
  font-size: ${toREM('24px')};
  font-weight: bold;

  ${breakpointMin.lg`
    font-size: ${toREM('32px')};
  `}
`;
