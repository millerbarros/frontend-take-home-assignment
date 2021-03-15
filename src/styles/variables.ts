import theme from 'styled-theming';

/**
 * CAUTION: Do not import styles/functions here to avoid circular dependency
 */

const colorThemeFactory = (value: string): theme.ThemeSet => {
  return theme('mode', { light: value });
};

export const BREAKPOINTS = {
  xs: '0px',
  sm: '768px',
  md: '990px',
  lg: '1280px'
};

export const SPACING = {
  '2xs': `${4 / 12}rem`, // 4px / GENERAL.fontSize
  xs: `${8 / 12}rem`, // 8px / GENERAL.fontSize
  sm: `${16 / 12}rem`, // 16px / GENERAL.fontSize
  md: `${24 / 12}rem`, // 24px / GENERAL.fontSize
  lg: `${32 / 12}rem`, // 32px / GENERAL.fontSize
  xl: `${48 / 12}rem`, // 48px / GENERAL.fontSize
  '2xl': `${56 / 12}rem` // 56px / GENERAL.fontSize
};

export const COLOR = {
  brandPrimaryColor: colorThemeFactory('#1B31A8'),
  brandColorSecondary: colorThemeFactory('#0079FF'),

  neutralWhite: colorThemeFactory('#FFFFFF'),

  blueGray10: colorThemeFactory('#F4F8FA'),
  blueGray50: colorThemeFactory('#E9EEF2'),
  blueGray100: colorThemeFactory('#CBD5DC'),
  blueGray300: colorThemeFactory('#8A9CA9'),
  blueGray400: colorThemeFactory('#708797'),
  blueGray600: colorThemeFactory('#4D6475'),
  blueGray900: colorThemeFactory('#1C1E1F')
};

export const GENERAL = {
  fontSize: '12px',
  minWidth: '400px'
};

export const HEADER = {
  small: {
    height: `${56 / 12}rem` // 56px / GENERAL.fontSize
  },
  large: {
    height: `${80 / 12}rem` // 80px / GENERAL.fontSize
  }
};
