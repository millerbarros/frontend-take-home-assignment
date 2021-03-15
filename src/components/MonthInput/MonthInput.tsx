import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  HTMLAttributes
} from 'react';

// HELPERS
import {
  formatMonth,
  formatYear,
  increaseDateMonth,
  decreaseDateMonth,
  isFutureMonth,
  isCurrentMonth
} from '~/helpers/date';

// STYLES
import {
  StyledHiddenButton,
  StyledMonthInputContainer,
  StyledMonthInputContent,
  StyledMonthInputController,
  StyledMonthInputMonth,
  StyledMonthInputYear
} from './MonthInput.styles';

// ASSETS
import AngleLeftIcon from '~/assets/icons/angle-left.svg';
import AngleRightIcon from '~/assets/icons/angle-right.svg';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  tabIndex?: number;
  focusControllerTestId?: string;
  increaseControllerTestId?: string;
  decreaseControllerTestId?: string;
  monthDisplayTestId?: string;
  yearDisplayTestId?: string;
}

export const MonthInput = ({
  value,
  onChange,
  tabIndex,
  focusControllerTestId,
  increaseControllerTestId,
  decreaseControllerTestId,
  monthDisplayTestId,
  yearDisplayTestId,
  ...restProps
}: Props) => {
  const [isoDate, setIsoDate] = useState(value);
  const [focussed, setFocus] = useState(false);
  const [focusing, setFocusing] = useState(false);

  const hiddenButtonRef = useRef<HTMLButtonElement | null>();

  const prevMonth = useMemo(() => decreaseDateMonth(isoDate), [isoDate]);
  const nextMonth = useMemo(() => increaseDateMonth(isoDate), [isoDate]);
  const formatedMonth = useMemo(() => formatMonth(isoDate), [isoDate]);
  const formatedYear = useMemo(() => formatYear(isoDate), [isoDate]);
  const canDecrease = useMemo(() => {
    return isFutureMonth(isoDate) && !isCurrentMonth(prevMonth);
  }, [isoDate, prevMonth]);

  const increaseMonth = useCallback(() => {
    const newIsoDate = nextMonth.toISOString();

    setIsoDate(newIsoDate);
    if (onChange) onChange(newIsoDate);
  }, [nextMonth, onChange]);

  const decreaseMonth = useCallback(() => {
    if (!canDecrease) return;

    const newIsoDate = prevMonth.toISOString();

    setIsoDate(newIsoDate);
    if (onChange) onChange(newIsoDate);
  }, [canDecrease, prevMonth, onChange]);

  const applyFocus = () => {
    hiddenButtonRef.current?.focus();
  };

  // Handle value props changes
  useEffect(() => {
    if (!value || !isFutureMonth(value)) {
      const date = new Date();
      const nextMonth = date.getMonth() + 1;

      date.setMonth(nextMonth);

      const newIsoDate = date.toISOString();

      setIsoDate(newIsoDate);
      if (onChange) onChange(newIsoDate);

      return;
    }

    setIsoDate(value);
  }, [value, onChange]);

  // Create left and right arrows keypress listeners on focus
  useEffect(() => {
    if (!focussed) return;

    const inputElement = hiddenButtonRef.current;

    if (!inputElement) return;

    const keypressListener = (e: KeyboardEvent) => {
      const key = e.key;

      if (key === 'ArrowLeft') return decreaseMonth();
      if (key === 'ArrowRight') return increaseMonth();
    };

    inputElement.addEventListener('keydown', keypressListener, true);

    return () => {
      inputElement.removeEventListener('keydown', keypressListener, true);
    };
  }, [focussed, increaseMonth, decreaseMonth]);

  return (
    <StyledMonthInputContainer
      $focussed={focussed}
      onMouseDown={() => setFocusing(true)}
      onMouseUp={() => {
        setFocusing(false);
        applyFocus();
      }}
      {...restProps}
    >
      <StyledHiddenButton
        ref={elRef => (hiddenButtonRef.current = elRef)}
        onFocus={() => setFocus(true)}
        onBlur={() => !focusing && setFocus(false)}
        data-testid={focusControllerTestId}
        tabIndex={tabIndex}
      />

      <StyledMonthInputController
        type="button"
        onClick={decreaseMonth}
        $disabled={!canDecrease}
        data-testid={decreaseControllerTestId}
        tabIndex={-1}
      >
        <AngleLeftIcon />
      </StyledMonthInputController>

      <StyledMonthInputContent>
        <StyledMonthInputMonth data-testid={monthDisplayTestId}>
          {formatedMonth}
        </StyledMonthInputMonth>
        <StyledMonthInputYear data-testid={yearDisplayTestId}>
          {formatedYear}
        </StyledMonthInputYear>
      </StyledMonthInputContent>

      <StyledMonthInputController
        type="button"
        onClick={increaseMonth}
        data-testid={increaseControllerTestId}
        tabIndex={-1}
      >
        <AngleRightIcon />
      </StyledMonthInputController>
    </StyledMonthInputContainer>
  );
};
