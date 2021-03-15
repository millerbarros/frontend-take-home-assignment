import React from 'react';
import { cleanup, render, screen } from '../test-utils';

// COMPONENTS
import { Card } from '~/components/Card';

const TEST_ID = 'test-card';

const renderCard = (children?: React.ReactNode) => {
  render(<Card data-testid={TEST_ID}>{children}</Card>);
};

const findCard = async () => {
  return await screen.findByTestId(TEST_ID);
};

describe('Card component', () => {
  afterEach(cleanup);

  it('renders', async () => {
    renderCard();

    expect(await findCard()).toBeInTheDocument();
  });

  it('renders the card content', async () => {
    renderCard('Test');

    expect(await findCard()).toHaveTextContent('Test');
  });
});
