const getDateInstance = (value: string | Date): Date =>
  typeof value === 'string' ? new Date(value) : value;

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

  return date.getFullYear().toString();
};

/**
 * Increases by one the month of a date string or a Date
 *
 * @param value value to be increased - can be a date string or a Date
 *
 * @return A new Date with the month increased
 *
 * @example
 * increaseDateMonth('2021-03-14')
 * // -> Date('2021-04-14')
 */
export const increaseDateMonth = (value: string | Date): Date => {
  const date = getDateInstance(value);

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const isSameYear = currentMonth < 11;

  const nextMonth = isSameYear ? currentMonth + 1 : 0;
  const nextYear = isSameYear ? currentYear : +currentYear + 1;

  date.setMonth(nextMonth);
  date.setFullYear(nextYear);

  return date;
};

/**
 * Decreases by one the month of a date string or a Date
 *
 * @param value value to be decreased - can be a date string or a Date
 *
 * @return A new Date with the month decreased
 *
 * @example
 * decreaseDateMonth('2021-03-14')
 * // -> Date('2021-02-14')
 */
export const decreaseDateMonth = (value: string | Date): Date => {
  const date = getDateInstance(value);

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const isSameYear = currentMonth > 0;

  const prevMonth = isSameYear ? currentMonth - 1 : 11;
  const prevYear = isSameYear ? currentYear : +currentYear - 1;

  date.setMonth(prevMonth);
  date.setFullYear(prevYear);

  return date;
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
  const today = new Date();

  const valueMonth = date.getMonth();
  const valueYear = date.getFullYear();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  if (valueYear > currentYear) return true;
  if (valueMonth > currentMonth) return true;

  return false;
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
  const today = new Date();

  const valueMonth = date.getMonth();
  const valueYear = date.getFullYear();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  return valueYear === currentYear && valueMonth === currentMonth;
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
  const yearsDiff = date2.getFullYear() - date1.getFullYear();

  let monthsDiff = yearsDiff * 12;
  monthsDiff -= date1.getMonth();
  monthsDiff += date2.getMonth();

  return monthsDiff;
};
