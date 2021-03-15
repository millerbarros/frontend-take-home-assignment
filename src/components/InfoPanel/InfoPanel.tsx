import React, { PropsWithChildren } from 'react';

// STYLED COMPONENTS
import {
  StyledInfoPanel,
  StyledInfoPanelHeader,
  StyledInfoPanelContent,
  StyledInfoPanelTitle,
  StyledInfoPanelHighlight
} from './InfoPanel.styles';

interface Props {
  title: string;
  highlightText?: string;
  className?: string;
}

export const InfoPanel = ({
  title,
  highlightText,
  className,
  children
}: PropsWithChildren<Props>) => {
  return (
    <StyledInfoPanel className={className}>
      <StyledInfoPanelHeader>
        <StyledInfoPanelTitle title={title}>{title}</StyledInfoPanelTitle>
        <StyledInfoPanelHighlight>{highlightText}</StyledInfoPanelHighlight>
      </StyledInfoPanelHeader>

      <StyledInfoPanelContent>{children}</StyledInfoPanelContent>
    </StyledInfoPanel>
  );
};
