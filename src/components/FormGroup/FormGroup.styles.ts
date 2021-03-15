import styled from 'styled-components';

// STYLES
import { toREM } from '~/styles/functions';
import { breakpointMin, textEllipsis } from '~/styles/mixins';
import { COLOR, SPACING } from '~/styles/variables';

export const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0; /* Allows text-overflow to works with display: flex; */
`;

export const StyledFormGroupLabel = styled.label`
  font-size: ${toREM('12px')};
  line-height: ${toREM('18px')};
  color: ${COLOR.blueGray900};
  margin-bottom: ${SPACING['2xs']};

  ${textEllipsis()}

  ${breakpointMin.lg`
    font-size: ${toREM('14px')};
    line-height: ${toREM('21px')};
  `}
`;
