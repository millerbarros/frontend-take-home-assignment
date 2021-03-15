import React from 'react';

// STYLED COMPONENTS
import {
  StyledCardHeader,
  StyledCardHeaderLeftContent,
  StyledCardHeaderMainContent,
  StyledCardHeaderTitle,
  StyledCardHeaderSubtitle
} from './CardHeader.styles';

interface Props {
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  title?: string;
  subtitle?: string;
}

export const CardHeader = ({ icon: Icon, title, subtitle }: Props) => {
  if (!Icon && !title) return null;

  const leftContentComponent = Icon && (
    <StyledCardHeaderLeftContent>
      <Icon />
    </StyledCardHeaderLeftContent>
  );
  const subtitleComponent = subtitle && (
    <StyledCardHeaderSubtitle title={subtitle}>
      {subtitle}
    </StyledCardHeaderSubtitle>
  );

  return (
    <StyledCardHeader>
      {leftContentComponent}

      <StyledCardHeaderMainContent>
        <StyledCardHeaderTitle title={title}>{title}</StyledCardHeaderTitle>
        {subtitleComponent}
      </StyledCardHeaderMainContent>
    </StyledCardHeader>
  );
};
