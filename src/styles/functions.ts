// STYLES
import { GENERAL } from '~/styles/variables';

const pxToNumber = (value: string | number): number => {
  if (typeof value === 'number') return value;

  return Number(value.replace(/px$/, ''));
};

/**
 * Converts px values to REM
 *
 * @param value Value to be converted. Can be a string (e.g. '10px') or a number (e.g. 10).
 *
 * @return Converted value to rem unit, regarding the general font-size.
 *
 * @example
 * // Considering GENERAL.fontSize as '12px'
 * toREM('18px') === '1.5rem'
 */
export const toREM = (value: string | number): string => {
  const fontSizeBase = pxToNumber(GENERAL.fontSize);
  const parsedValue = pxToNumber(value);

  return `${parsedValue / fontSizeBase}rem`;
};

/**
 * Returns a line-height value for a font-size
 *
 * @param fontSize Font size used to calculate the line height. Can be a string (e.g. '10px') or a number (e.g. 10).
 *
 * @return The line-height value as rem unit, regarding the received font-size.
 *
 * @example
 * toLineHeight('10px') === toREM('12px') === '1rem'
 */
export const toLineHeight = (fontSize: string | number): string => {
  const fontSizeValue = pxToNumber(fontSize);
  const lineHeight = fontSizeValue * 1.2;

  return toREM(lineHeight);
};
