import React from 'react';

// LAYOUT
import { DefaultLayout } from '~/layouts/Default';

// COMPONENTS
import { Card } from '~/shared/components/Card';
import { GoalAvatar } from '~/shared/components/GoalAvatar';

// HOOKS
import { useListGoals } from '~/shared/hooks';

// ASSETS
import CollegeIcon from '~/assets/icons/college.svg';
import VacationIcon from '~/assets/icons/vacation.svg';
import CarIcon from '~/assets/icons/car.svg';
import WeddingPartyIcon from '~/assets/icons/wedding-party.svg';
import EmergencyFoundIcon from '~/assets/icons/emergency-found.svg';
import BabyIcon from '~/assets/icons/baby.svg';

const ICONS: {
  [key: string]: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
} = {
  college: CollegeIcon,
  vacation: VacationIcon,
  car: CarIcon,
  'wedding-party': WeddingPartyIcon,
  'emergency-found': EmergencyFoundIcon,
  baby: BabyIcon
};

export const ListGoals = () => {
  const { data } = useListGoals();

  const cards = (data || []).map(goal => (
    <Card key={goal.slug}>
      <GoalAvatar title={goal.title} icon={ICONS[goal.slug]} />
    </Card>
  ));

  return <DefaultLayout large>{cards}</DefaultLayout>;
};
