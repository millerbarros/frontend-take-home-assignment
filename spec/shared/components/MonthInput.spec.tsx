import React from 'react';
import { cleanup, render, fireEvent, screen } from '../../test-utils';

// COMPONENTS
import { MonthInput } from '~/features/manageGoal/components/MonthInput';

// HELPERS
import { increaseDateMonth } from '~/shared/helpers/date';

const TEST_ID = 'test-month-input';
const FOCUS_CONTROLLER_TEST_ID = 'test-focus-controller';
const INCREASE_CONTROLLER_TEST_ID = 'test-increase-controller';
const DECREASE_CONTROLLER_TEST_ID = 'test-decrease-controller';
const MONTH_DISPLAY_TEST_ID = 'test-month-display';
const YEAR_DISPLAY_TEST_ID = 'test-year-display';

const renderMonthInput = (
  value: string,
  onChange: (value: string) => void = () => null
) => {
  render(
    <MonthInput
      data-testid={TEST_ID}
      focusControllerTestId={FOCUS_CONTROLLER_TEST_ID}
      increaseControllerTestId={INCREASE_CONTROLLER_TEST_ID}
      decreaseControllerTestId={DECREASE_CONTROLLER_TEST_ID}
      monthDisplayTestId={MONTH_DISPLAY_TEST_ID}
      yearDisplayTestId={YEAR_DISPLAY_TEST_ID}
      onChange={onChange}
      value={value}
    />
  );
};

const findMonthInput = async () => {
  return await screen.findByTestId(TEST_ID);
};

const findFocusController = async () => {
  return await screen.findByTestId(FOCUS_CONTROLLER_TEST_ID);
};

const clickDecreaseButton = async () => {
  const decreaseButton = await screen.findByTestId(DECREASE_CONTROLLER_TEST_ID);

  fireEvent.click(decreaseButton);
};

const clickIncreaseButton = async () => {
  const increaseButton = await screen.findByTestId(INCREASE_CONTROLLER_TEST_ID);

  fireEvent.click(increaseButton);
};

const focusAndPressArrowLeft = async (ctrlKey?: boolean, altKey?: boolean) => {
  const inputMonth = await findMonthInput();
  const focusController = await findFocusController();

  fireEvent.mouseUp(inputMonth);
  fireEvent.keyDown(focusController, {
    key: 'ArrowLeft',
    code: 'ArrowLeft',
    ctrlKey,
    altKey
  });
};

const focusAndPressArrowRight = async (ctrlKey?: boolean, altKey?: boolean) => {
  const inputMonth = await findMonthInput();
  const focusController = await findFocusController();

  fireEvent.mouseUp(inputMonth);
  fireEvent.keyDown(focusController, {
    key: 'ArrowRight',
    code: 'ArrowRight',
    ctrlKey,
    altKey
  });
};

const getShownMonth = async () => {
  const monthDisplay = await screen.findByTestId(MONTH_DISPLAY_TEST_ID);
  return monthDisplay.textContent || '';
};

describe('MonthInput component', () => {
  afterEach(cleanup);

  it('renders', async () => {
    renderMonthInput('2021-03-15');

    expect(await findMonthInput()).toBeInTheDocument();
  });

  it('When an invalid date string is passed, then changes the value to the next month', async () => {
    const onChange = jest.fn();
    const onChangeWrapper = (value: string) =>
      onChange(new Date(value).getMonth());
    const date = increaseDateMonth(new Date());

    await renderMonthInput('2021-13-15', onChangeWrapper);

    expect(onChange).toBeCalledWith(date.getMonth());
  });

  it('When a date string with the current month is passed, then changes the value to the next month', async () => {
    const onChange = jest.fn();
    const onChangeWrapper = (value: string) =>
      onChange(new Date(value).getMonth());
    const date = increaseDateMonth(new Date());

    await renderMonthInput('2021-03-15', onChangeWrapper);

    expect(onChange).toBeCalledWith(date.getMonth());
  });

  it('When a date string with a past month is passed, then changes the value to the next month', async () => {
    const onChange = jest.fn();
    const onChangeWrapper = (value: string) =>
      onChange(new Date(value).getMonth());

    renderMonthInput('2020-12-15', onChangeWrapper);

    expect(onChange).toBeCalledWith(increaseDateMonth(new Date()).getMonth());
  });

  it('When clicking on the increase button, then the month should be increased', async () => {
    renderMonthInput('2021-04-15');

    await clickIncreaseButton();

    const shownMonth = await getShownMonth();

    expect(shownMonth).toEqual('May');
  });

  it('When clicking on the decrease button, then the month should be decreased', async () => {
    renderMonthInput('2021-05-15');

    await clickDecreaseButton();

    const shownMonth = await getShownMonth();

    expect(shownMonth).toEqual('April');
  });

  it('When clicking on the decrease button with the min month selected, then the month should not be decreased', async () => {
    renderMonthInput('2021-04-15');

    await clickDecreaseButton();

    const shownMonth = await getShownMonth();

    expect(shownMonth).toEqual('April');
  });

  it('When keyboard arrow left is presses with MonthInput focussed, then the month should be decreased', async () => {
    renderMonthInput('2021-05-15');

    await focusAndPressArrowLeft();

    const shownMonth = await getShownMonth();

    expect(shownMonth).toEqual('April');
  });

  it('When keyboard arrow right is presses with MonthInput focussed, then the month should be decreased', async () => {
    renderMonthInput('2021-04-15');

    await focusAndPressArrowRight();

    const shownMonth = await getShownMonth();

    expect(shownMonth).toEqual('May');
  });

  it('When keyboard arrow left is presses with MonthInput focussed with the min month selected, then the month should be decreased', async () => {
    renderMonthInput('2021-04-15');

    await focusAndPressArrowLeft();

    const shownMonth = await getShownMonth();

    expect(shownMonth).toEqual('April');
  });
});
