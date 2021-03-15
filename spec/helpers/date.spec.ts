import {
  formatMonth,
  formatYear,
  increaseDateMonth,
  decreaseDateMonth,
  isFutureMonth,
  isCurrentMonth,
  monthsDiff
} from '~/helpers/date';

const getIncreasedDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date;
};

const getDecreasedDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date;
};

describe('Date helpers', () => {
  describe('formatMonth', () => {
    it('When a valid date string is passed, expect a formatted month string', () => {
      expect(formatMonth('2021-03-15')).toEqual('March');
    });

    it('When a valid Date is passed, expect a formatted month string', () => {
      expect(formatMonth(new Date('2021-03-15'))).toEqual('March');
    });

    it('When an invalid date string is passed, expect an empty string', () => {
      expect(formatMonth('2021-13-15')).toEqual('');
    });

    it('When an invalid Date is passed, expect an empty string', () => {
      expect(formatMonth(new Date('2021-13-15'))).toEqual('');
    });

    it('When an empty string is passed, expect an empty string', () => {
      expect(formatMonth('')).toEqual('');
    });
  });

  describe('formatYear', () => {
    it('When a valid date string is passed, expect a formatted year string', () => {
      expect(formatYear('2021-03-15')).toEqual('2021');
    });

    it('When a valid Date is passed, expect a formatted year string', () => {
      expect(formatYear(new Date('2021-03-15'))).toEqual('2021');
    });

    it('When an invalid date string is passed, expect an empty string', () => {
      expect(formatYear('2021-13-15')).toEqual('');
    });

    it('When an invalid Date is passed, expect an empty string', () => {
      expect(formatYear(new Date('2021-13-15'))).toEqual('');
    });

    it('When an empty string is passed, expect an empty string', () => {
      expect(formatYear('')).toEqual('');
    });
  });

  describe('increaseDateMonth', () => {
    it('When a valid date string is passed, expect a Date instance with the month increased', () => {
      expect(increaseDateMonth('2021-03-15')).toEqual(new Date('2021-04-15'));
    });

    it('When a valid Date is passed, expect a new Date instance with the month increased', () => {
      expect(increaseDateMonth(new Date('2021-03-15'))).toEqual(
        new Date('2021-04-15')
      );
    });

    it('When a valid Date is passed, expect that the passed Date has no changes', () => {
      const dateString = '2021-03-15';
      const date = new Date(dateString);

      increaseDateMonth(date);

      expect(date).toEqual(new Date(dateString));
    });

    it('When an invalid date string is passed, expect a Date with the current date increased', () => {
      const increasedDate = getIncreasedDate();

      expect(increaseDateMonth('2021-13-15')).toEqual(increasedDate);
    });

    it('When an invalid Date is passed, expect a Date with the current date increased', () => {
      const increasedDate = getIncreasedDate();

      expect(increaseDateMonth(new Date('2021-13-15'))).toEqual(increasedDate);
    });

    it('When an empty string is passed, expect a Date with the current date increased', () => {
      const increasedMonth = getIncreasedDate().getMonth();

      expect(increaseDateMonth('').getMonth()).toEqual(increasedMonth);
    });
  });

  describe('decreaseDateMonth', () => {
    it('When a valid date string is passed, expect a Date instance with the month decreased', () => {
      expect(decreaseDateMonth('2021-03-15')).toEqual(new Date('2021-02-15'));
    });

    it('When a valid Date is passed, expect a new Date instance with the month decreased', () => {
      expect(decreaseDateMonth(new Date('2021-03-15'))).toEqual(
        new Date('2021-02-15')
      );
    });

    it('When a valid Date is passed, expect that the passed Date has no changes', () => {
      const dateString = '2021-03-15';
      const date = new Date(dateString);

      decreaseDateMonth(date);

      expect(date).toEqual(new Date(dateString));
    });

    it('When an invalid date string is passed, expect a Date with the current date decreased', () => {
      const decreasedDate = getDecreasedDate();

      expect(decreaseDateMonth('2021-13-15')).toEqual(decreasedDate);
    });

    it('When an invalid Date is passed, expect a Date with the current date decreased', () => {
      const decreasedDate = getDecreasedDate();

      expect(decreaseDateMonth(new Date('2021-13-15'))).toEqual(decreasedDate);
    });

    it('When an empty string is passed, expect a Date with the current date decreased', () => {
      const decreasedMonth = getDecreasedDate().getMonth();

      expect(decreaseDateMonth('').getMonth()).toEqual(decreasedMonth);
    });
  });

  describe('isFutureMonth', () => {
    it('When a date string with a future month is passed, expect true', () => {
      expect(isFutureMonth('2021-04-15')).toEqual(true);
    });

    it('When a Date with a future month is passed, expect true', () => {
      expect(isFutureMonth(new Date('2021-04-15'))).toEqual(true);
    });

    it('When a date string with the current month is passed, expect false', () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDay();

      expect(isFutureMonth(`${year}-${month}-${day}`)).toEqual(false);
    });

    it('When a Date with the current month is passed, expect false', () => {
      expect(isFutureMonth(new Date())).toEqual(false);
    });

    it('When a date string with a past month is passed, expect false', () => {
      const date = getDecreasedDate();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDay();

      expect(isFutureMonth(`${year}-${month}-${day}`)).toEqual(false);
    });

    it('When a date string with a past year is passed, expect false', () => {
      const date = increaseDateMonth(new Date());
      const year = date.getFullYear() - 1;
      const month = date.getMonth() + 1;
      const day = date.getDay();

      expect(isFutureMonth(`${year}-${month}-${day}`)).toEqual(false);
    });

    it('When a Date with a past month is passed, expect false', () => {
      const decreasedDate = getDecreasedDate();

      expect(isFutureMonth(decreasedDate)).toEqual(false);
    });

    it('When an invalid date string is passed, expect false', () => {
      expect(isFutureMonth('2021-13-15')).toEqual(false);
    });

    it('When an invalid Date is passed, expect false', () => {
      expect(isFutureMonth(new Date('2021-13-15'))).toEqual(false);
    });
  });

  describe('isCurrentMonth', () => {
    it('When a date string with the current month is passed, expect true', () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDay();

      expect(isCurrentMonth(`${year}-${month}-${day}`)).toEqual(true);
    });

    it('When a Date with the current month is passed, expect true', () => {
      expect(isCurrentMonth(new Date())).toEqual(true);
    });

    it('When a date string with a future month is passed, expect false', () => {
      expect(isCurrentMonth('2021-04-15')).toEqual(false);
    });

    it('When a Date with a future month is passed, expect false', () => {
      expect(isCurrentMonth(new Date('2021-04-15'))).toEqual(false);
    });

    it('When a date string with a past month is passed, expect false', () => {
      const date = getDecreasedDate();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDay();

      expect(isCurrentMonth(`${year}-${month}-${day}`)).toEqual(false);
    });

    it('When a date string with a past year is passed, expect false', () => {
      const date = new Date();
      const year = date.getFullYear() - 1;
      const month = date.getMonth() + 1;
      const day = date.getDay();

      expect(isCurrentMonth(`${year}-${month}-${day}`)).toEqual(false);
    });

    it('When a Date with a past month is passed, expect false', () => {
      const decreasedDate = getDecreasedDate();

      expect(isCurrentMonth(decreasedDate)).toEqual(false);
    });

    it('When an invalid date string is passed, expect false', () => {
      expect(isCurrentMonth('2021-13-15')).toEqual(false);
    });

    it('When an invalid Date is passed, expect false', () => {
      expect(isCurrentMonth(new Date('2021-13-15'))).toEqual(false);
    });
  });

  describe('monthsDiff', () => {
    it('When a valid startDate and endDate is passed as string, expect the diff of months of them', () => {
      expect(monthsDiff('2021-01-01', '2021-03-15')).toEqual(3);
    });

    it('When a valid startDate and endDate is passed as Date, expect the diff of months of them', () => {
      const startDate = new Date('2021-01-01');
      const endDate = new Date('2021-03-15');

      expect(monthsDiff(startDate, endDate)).toEqual(3);
    });

    it('When an invalid startDate is passed as string, expect zero', () => {
      expect(monthsDiff('2020-13-01', '2021-03-15')).toEqual(0);
    });

    it('When an invalid startDate is passed as Date, expect zero', () => {
      const startDate = new Date('2020-13-01');
      const endDate = new Date('2021-03-15');

      expect(monthsDiff(startDate, endDate)).toEqual(0);
    });

    it('When an invalid endDate is passed as string, expect zero', () => {
      expect(monthsDiff('2021-01-01', '2021-13-15')).toEqual(0);
    });

    it('When an invalid endDate is passed as Date, expect zero', () => {
      const startDate = new Date('2021-01-01');
      const endDate = new Date('2021-13-15');

      expect(monthsDiff(startDate, endDate)).toEqual(0);
    });
  });
});
