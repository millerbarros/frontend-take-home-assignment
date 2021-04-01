import { formatCurrency } from '~/shared/helpers/currency';

describe('Currency helpers', () => {
  describe('formatCurrency', () => {
    it('When a valid integer numeric string is passed, expect a formatted currency string', () => {
      expect(formatCurrency('200000')).toEqual('$200,000');
    });

    it('When a valid numeric string with more than two decimals is passed, expect a formatted currency string', () => {
      expect(formatCurrency('200000.212')).toEqual('$200,000.21');
    });

    it('When a partial float numeric with less than two decimals is passed, expect a formatted currency string', () => {
      expect(formatCurrency('200000.2')).toEqual('$200,000.20');
    });

    it('When a partial float numeric with two decimals is passed, expect a formatted currency string', () => {
      expect(formatCurrency('200000.21')).toEqual('$200,000.21');
    });

    it('When a valid integer number is passed, expect a formatted currency string', () => {
      expect(formatCurrency(200000)).toEqual('$200,000');
    });

    it('When a valid float number with more than two decimals is passed, expect a formatted currency string', () => {
      expect(formatCurrency(200000.212)).toEqual('$200,000.21');
    });

    it('When a valid float number with less than two decimals is passed, expect a formatted currency string', () => {
      expect(formatCurrency(200000.2)).toEqual('$200,000.20');
    });

    it('When a valid float number with two decimals is passed, expect a formatted currency string', () => {
      expect(formatCurrency(200000.21)).toEqual('$200,000.21');
    });

    it('When a zero is passed as a string, expect a formatted currency string as zero', () => {
      expect(formatCurrency('0')).toEqual('$0');
    });

    it('When the number zero is passed, expect a formatted currency string as zero', () => {
      expect(formatCurrency(0)).toEqual('$0');
    });

    it('When a invalid numeric string is passed, expect a formatted currency string as zero', () => {
      expect(formatCurrency('ab123')).toEqual('$0');
    });

    it('When a NaN is passed, expect a formatted currency string as zero', () => {
      expect(formatCurrency(NaN)).toEqual('$0');
    });

    it('When a empty string is passed, expect a formatted currency string as zero', () => {
      expect(formatCurrency('')).toEqual('$0');
    });
  });
});
