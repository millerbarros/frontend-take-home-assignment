const getDateInstance = (value: string | Date): Date | null => {
  if (!value) return null;

  const date =
    typeof value === 'string' ? new Date(value) : new Date(value.getTime());

  if (Number.isNaN(date.getTime())) return null;

  return date;
};

/**
 * Formats a date string or a Date to a month string
 *
 * @param value value to be formatted - can be a date string or a Date
 *
 * @return A string containing the formatted month
 *
 * @example
 * formatMonth(new Date('2021-03-14'))
 * // -> March
 */
export const formatMonth = (value: string | Date): string => {
  const date = getDateInstance(value);

  if (!date) return '';

  return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
};

/**
 * Formats a date string or a Date to a year string
 *
 * @param value value to be formatted - can be a date string or a Date
 *
 * @return A string containing the formatted year
 *
 * @example
 * formatYear('2021-03-14')
 * // -> 2021
 */
export const formatYear = (value: string | Date): string => {
  const date = getDateInstance(value);

  if (!date) return '';

  return date.getFullYear().toString();
};

/**
 * Calculates the difference in months between two dates
 *
 * @param startDate the start date of the interval to be calculated - can be a date string or a Date.
 * @param endDate the end date of the interval to be calculated - can be a date string or a Date.
 *
 * @return a number with the difference
 *
 * @example
 * monthsDiff('2021-01-14', '2021-03-14')
 * // -> 2
 */
export const monthsDiff = (
  startDate: string | Date,
  endDate: string | Date
): number => {
  const date1 = getDateInstance(startDate);
  const date2 = getDateInstance(endDate);

  if (!date1 || !date2) return 0;

  const yearsDiff = date2.getFullYear() - date1.getFullYear();

  let monthsDiff = yearsDiff * 12;
  monthsDiff -= date1.getMonth();
  monthsDiff += date2.getMonth();

  return monthsDiff;
};

/**
 * Increases by one the month of a date string or a Date
 *
 * @param date date to be increased - should be a Date
 *
 * @return A new Date with the month increased
 *
 * @example
 * increaseDateMonth('2021-03-14')
 * // -> Date('2021-04-14')
 */
export const increaseDateMonth = (date: string | Date): Date => {
  let newDate = getDateInstance(date);

  if (!newDate) {
    newDate = new Date();
  }

  const currentMonth = newDate.getMonth();
  const nextMonth = currentMonth + 1;

  newDate.setMonth(nextMonth);

  return newDate;
};

/**
 * Decreases by one the month of a date string or a Date
 *
 * @param date date to be decreased - should be a Date
 *
 * @return A new Date with the month decreased
 *
 * @example
 * decreaseDateMonth('2021-03-14')
 * // -> Date('2021-02-14')
 */
export const decreaseDateMonth = (date: string | Date): Date => {
  let newDate = getDateInstance(date);

  if (!newDate) {
    newDate = new Date();
  }

  const currentMonth = newDate.getMonth();
  const prevMonth = currentMonth - 1;

  newDate.setMonth(prevMonth);

  return newDate;
};

/**
 * Checks if the month of a date string or a Date is after the current date month
 *
 * @param value value to be checked - can be a date string or a Date.
 *
 * @return boolean
 *
 * @example
 * isFutureMonth('2020-12-14')
 * // -> false
 */
export const isFutureMonth = (value: string | Date): boolean => {
  const date = getDateInstance(value);

  if (!date) return false;

  return monthsDiff(new Date(), date) > 0;
};

/**
 * Checks if the month of a date string or a Date is the same as the current date month
 *
 * @param value value to be checked - can be a date string or a Date.
 *
 * @return boolean
 *
 * @example
 * isCurrentMonth('2021-03-14')
 * // -> true
 */
export const isCurrentMonth = (value: string | Date): boolean => {
  const date = getDateInstance(value);

  if (!date) return false;

  const today = new Date();
  const valueMonth = date.getMonth();
  const valueYear = date.getFullYear();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  return valueYear === currentYear && valueMonth === currentMonth;
};
