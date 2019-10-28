const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  // turn inputs into date/time objects and then convert the date part of
  // the object into a string
  const systemDateTime = new Date(dateToFormatTimeMillis).toDateString();
  const dateTimeToFormat = new Date(systemDateTimeMillis).toDateString();
  // if inputs are the same, return string saying "today", if not, return a
  // date in the format of DD/MM/YYYY
  return systemDateTime === dateTimeToFormat ? "TODAY" : "";
};

module.exports = { format };
