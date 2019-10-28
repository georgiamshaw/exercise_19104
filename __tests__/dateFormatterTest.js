import { format } from "../src/dateFormatter";

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
