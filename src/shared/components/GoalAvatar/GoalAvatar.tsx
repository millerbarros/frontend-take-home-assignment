import React, { HTMLAttributes } from 'react';

// STYLED COMPONENTS
import {
  StyledGoalAvatar,
  StyledGoalAvatarLeftContent,
  StyledGoalAvatarMainContent,
  StyledGoalAvatarTitle,
  StyledGoalAvatarSubtitle
} from './GoalAvatar.styles';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  title?: string;
  subtitle?: string;
}

export const GoalAvatar = ({
  icon: Icon,
  title,
  subtitle,
  ...restProps
}: Props) => {
  if (!Icon && !title) return null;

  const leftContentComponent = Icon && (
    <StyledGoalAvatarLeftContent>
      <Icon />
    </StyledGoalAvatarLeftContent>
  );
  const subtitleComponent = subtitle && (
    <StyledGoalAvatarSubtitle title={subtitle}>
      {subtitle}
    </StyledGoalAvatarSubtitle>
  );

  return (
    <StyledGoalAvatar {...restProps}>
      {leftContentComponent}

      <StyledGoalAvatarMainContent>
        <StyledGoalAvatarTitle title={title}>{title}</StyledGoalAvatarTitle>
        {subtitleComponent}
      </StyledGoalAvatarMainContent>
    </StyledGoalAvatar>
  );
};
