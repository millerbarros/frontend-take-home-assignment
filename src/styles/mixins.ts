import { css } from 'styled-components';

// STYLES
import { BREAKPOINTS } from '~/styles/variables';

type BreakpointMixinObject = {
  [key in keyof typeof BREAKPOINTS]: (
    ...args: CssParams
  ) => ReturnType<typeof css>;
};

type CssParams = Parameters<typeof css>;

/**
 * Generate a `@media screen (min-width: N) { ... }` rule using named breakpoints
 *
 * @example
 * const MyStyledComponent = styled.div`
 *    height: 20px;
 *
 *    ${breakpointMin.md`
 *      height: 30px;
 *    `}
 * `
 */
export const breakpointMin = Object.keys(BREAKPOINTS).reduce(
  (accumulator, breakpoint: keyof typeof BREAKPOINTS) => {
    accumulator[breakpoint] = (...args: CssParams) => {
      const minWidth = BREAKPOINTS[breakpoint];

      return css`
        @media (min-width: ${minWidth}) {
          ${css(...args)}
        }
      `;
    };

    return accumulator;
  },
  {} as BreakpointMixinObject
);

/**
 * Generates properties that make an element add ellipsis if his content overflows his box
 *
 * @param numberOfLines max number of lines allowed before add ellipsis
 *
 * @example
 * const MyStyledComponent = styled.div`
 *    ${textEllipsis()}
 * `
 */
export const textEllipsis = (numberOfLines = 1) => {
  if (numberOfLines > 1) {
    return css`
      max-width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: ${numberOfLines};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `;
  }

  return css`
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `;
};
