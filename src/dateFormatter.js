const convertDateToCorrectFormat = date => {
  // create a date object
  const d = new Date(date);
  // find the day, month and year of the date
  let day = "" + d.getDate();
  let month = "" + (d.getMonth() + 1);
  let year = d.getFullYear();
  return [day, month, year].join("/");
};

const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  // turn inputs into date/time objects and then convert the date part of
  // the object into a string
  const systemDateTime = new Date(systemDateTimeMillis).toDateString();
  const dateTimeToFormat = new Date(dateToFormatTimeMillis).toDateString();
  // if inputs are the same, return string saying "today", if not, return a
  // date in the format of DD/MM/YYYY
  return systemDateTime === dateTimeToFormat
    ? "TODAY"
    : convertDateToCorrectFormat(dateTimeToFormat);
};

module.exports = { format };
