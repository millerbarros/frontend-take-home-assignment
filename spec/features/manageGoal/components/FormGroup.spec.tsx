import React, { ReactNode } from 'react';
import { cleanup, render, screen } from '../../../test-utils';

// COMPONENTS
import { FormGroup } from '~/features/manageGoal/components/FormGroup';

const TEST_ID = 'test-form-group';

const renderFormGroup = (
  label: string,
  htmlFor?: string,
  children?: ReactNode
) => {
  render(
    <FormGroup data-testid={TEST_ID} label={label} htmlFor={htmlFor}>
      {children}
    </FormGroup>
  );
};

const findFormGroup = async () => {
  return await screen.findByTestId(TEST_ID);
};

describe('FormGroup component', () => {
  afterEach(cleanup);

  it('renders', async () => {
    renderFormGroup('Label');

    expect(await findFormGroup()).toBeInTheDocument();
  });

  it('renders a label', async () => {
    renderFormGroup('Label');

    const formGroup = await findFormGroup();
    const labelElement = await formGroup.querySelector('label');

    expect(labelElement).toBeInTheDocument();
  });

  it('renders the label text', async () => {
    renderFormGroup('Label');

    const formGroup = await findFormGroup();
    const labelElement = await formGroup.querySelector('label');

    expect(labelElement).toHaveTextContent('Label');
  });

  it('When "htmlFor" is passed, then the label should receive that', async () => {
    renderFormGroup('Label', 'forMyInput');

    const formGroup = await findFormGroup();
    const labelElement = await formGroup.querySelector('label');

    expect(labelElement).toHaveAttribute('for');
  });

  it('When has children, then the children should be rendered', async () => {
    renderFormGroup('Label', 'forMyInput', 'Child');

    expect(await findFormGroup()).toHaveTextContent('Child');
  });
});
