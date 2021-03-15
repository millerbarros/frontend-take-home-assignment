import React from 'react';
import { cleanup, render, fireEvent, screen } from '../test-utils';

// COMPONENTS
import { CurrencyInput } from '~/components/CurrencyInput';

const TEST_ID = 'test-currency-input';

const renderCurrencyInput = (
  value: string,
  onChange: () => void = () => null
) => {
  render(
    <CurrencyInput data-testid={TEST_ID} onChange={onChange} value={value} />
  );
};

const findCurrencyInput = async () => {
  return await screen.findByTestId(TEST_ID);
};

describe('CurrencyInput component', () => {
  afterEach(cleanup);

  it('renders a input', async () => {
    renderCurrencyInput('');

    expect(await findCurrencyInput()).toBeInstanceOf(HTMLInputElement);
  });

  it('When a invalid numeric string is passed, then changes the value to an empty string', async () => {
    const onChange = jest.fn();

    renderCurrencyInput('a123', onChange);

    expect(onChange).toBeCalledWith('');
  });

  it('When an invalid numeric string is passed, then changes the value to a corrected numeric string', async () => {
    const onChange = jest.fn();

    renderCurrencyInput('20,000', onChange);

    expect(onChange).toBeCalledWith('20000');
  });

  it('When blur with other than two decimals, then changes the value to two decimals', async () => {
    const onChange = jest.fn();

    renderCurrencyInput('20000.2', onChange);

    const currencyInput = await findCurrencyInput();

    fireEvent.blur(currencyInput);

    expect(onChange).toBeCalledWith('20000.20');
  });
});
