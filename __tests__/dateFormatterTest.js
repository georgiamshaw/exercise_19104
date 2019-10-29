import { format, convertDateToCorrectFormat } from "../src/dateFormatter";

// ensure the test file is working
it("1 equals 1", () => {
  const one = 1;
  expect(one).toBe(1);
});

it('when system date and date to format are the same day, format as "TODAY"', () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime(); //Same day different time
  expect(format(dateTimeToFormat, systemDateTime)).toBe("TODAY");
});

it("when system date and date to format are not the same day, format system date as DD/MM/YYYY", () => {
  const November = 10; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, November, 12, 11, 30).getTime();
  const dateTimeToFormat = new Date(2017, November, 10, 11, 30).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe("10/11/2017");
});

it("when system date is a month with 1 digit, return month number with 0 in front", () => {
  const March = 2; //js Date object month is indexed from 0
  const systemDateTime = new Date(2017, March, 12, 19, 59).getTime();
  const dateTimeToFormat = new Date(2018, March, 11, 11, 30).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe("11/03/2018");
});

it("when system date is a day with 1 digit, return day number with 0 in front", () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2017, December, 5, 19, 59).getTime();
  const dateTimeToFormat = new Date(2018, December, 7, 11, 30).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe("07/12/2018");
});

it("when system date and date to format are the same day, and month and day are 1 digit, format as 'TODAY'", () => {
  const February = 1; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, February, 5, 7, 51).getTime();
  const dateTimeToFormat = new Date(2018, February, 5, 12, 40).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe("TODAY");
});

it("convertDateToCorrectFormat provides date in format DD/MM/YYYY", () => {
  const February = 1;
  const d = new Date(2018, February, 5, 7, 51);
  expect(convertDateToCorrectFormat(date)).toBe("05/02/2018");
});
