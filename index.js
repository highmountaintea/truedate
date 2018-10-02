function TrueDate(year, month, date) {
  this.year = year;
  this.month = month;
  this.date = date;
}

TrueDate.create = function (year, month, date) {
  return new TrueDate(year, month, date);
};

module.exports = TrueDate;
