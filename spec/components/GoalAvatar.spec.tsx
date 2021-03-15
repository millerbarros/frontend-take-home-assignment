import React from 'react';
import { cleanup, render, screen } from '../test-utils';

// COMPONENTS
import { GoalAvatar } from '~/components/GoalAvatar';

const TEST_ID = 'test-goal-avatar';

const Icon: React.FunctionComponent = () => <span>Icon</span>;

const renderGoalAvatar = (
  title?: string,
  icon?: React.FunctionComponent,
  subtitle?: string
) => {
  render(
    <GoalAvatar
      data-testid={TEST_ID}
      title={title}
      subtitle={subtitle}
      icon={icon}
    />
  );
};

const findGoalAvatar = async () => {
  try {
    return await screen.findByTestId(TEST_ID);
  } catch (e) {
    return null;
  }
};

describe('GoalAvatar component', () => {
  afterEach(cleanup);

  it('When title and icon is not passed, then do not render', async () => {
    renderGoalAvatar();

    expect(await findGoalAvatar()).toBeNull();
  });

  it('When only title is passed, then render', async () => {
    renderGoalAvatar('Title');

    expect(await findGoalAvatar()).toBeInTheDocument();
  });

  it('When only icon is passed, then render', async () => {
    renderGoalAvatar(undefined, Icon);

    expect(await findGoalAvatar()).toBeInTheDocument();
  });

  it('When title and icon is passed, then render', async () => {
    renderGoalAvatar('Title', Icon);

    expect(await findGoalAvatar()).toBeInTheDocument();
  });

  it('When title is passed, then render the title', async () => {
    renderGoalAvatar('Title');

    expect(await findGoalAvatar()).toHaveTextContent('Title');
  });

  it('When subtitle is passed, then render the title', async () => {
    renderGoalAvatar('Title', Icon, 'Subtitle');

    expect(await findGoalAvatar()).toHaveTextContent('Subtitle');
  });

  it('When icon is passed, then render the icon', async () => {
    renderGoalAvatar('Title', Icon);

    expect(await findGoalAvatar()).toHaveTextContent('Icon');
  });
});
