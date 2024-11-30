function makeRange(start, end) {
  let range = [];
  let nextVal = start;

  while (nextVal <= end) {
    range.push(nextVal);
    nextVal = nextVal + 1;
  }

  return range;
}
