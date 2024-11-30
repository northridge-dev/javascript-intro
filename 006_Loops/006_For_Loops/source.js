function makeRange(start, end) {
  let range = [];

  for (let nextVal = start; nextVal <= end; nextVal = nextVal + 1) {
    range.push(nextVal);
  }

  return range;
}

console.log(makeRange(2, 7));
