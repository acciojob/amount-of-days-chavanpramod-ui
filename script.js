//your JS code here. If required.
function daysOfAYear(year) {
  const yr = Number(year);

  if ((yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0)) {
    return 366;
  }
  return 365;
}

console.log(daysOfAYear(2023));
