import React from 'react';
import { cleanup, render, fireEvent, screen } from '../../test-utils';

// COMPONENTS
import { Button } from '~/shared/components/Button';

const TEST_ID = 'test-button';

const renderButton = (children?: React.ReactNode, onClick?: () => void) => {
  render(
    <Button data-testid={TEST_ID} onClick={onClick}>
      {children}
    </Button>
  );
};

const findButton = async () => {
  return await screen.findByTestId(TEST_ID);
};

describe('Button component', () => {
  afterEach(cleanup);

  it('renders a button', async () => {
    renderButton();

    expect(await findButton()).toBeInstanceOf(HTMLButtonElement);
  });

  it('renders the button content', async () => {
    renderButton('Test');

    expect(await findButton()).toHaveTextContent('Test');
  });

  it('calls the onClick when clicking', async () => {
    const onClick = jest.fn();

    renderButton('Test', onClick);

    const button = await findButton();
    fireEvent.click(button);

    expect(onClick).toBeCalled();
  });
});
