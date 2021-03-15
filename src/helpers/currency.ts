/**
 * Formats a numeric string or a number to a currency string
 *
 * @param value value to be formatted - can be a numeric string or a number.
 *
 * @example
 * formatCurrency('25000.10')
 * // -> $25,000.10
 */
export const formatCurrency = (value: string | number) => {
  const currencyString = typeof value === 'number' ? value.toString() : value;
  let currencyValue = typeof value === 'string' ? Number(value) : value;
  const hasDecimal = currencyString.includes('.');

  if (Number.isNaN(currencyValue)) {
    currencyValue = 0;
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: hasDecimal ? 2 : 0
  }).format(currencyValue);
};
