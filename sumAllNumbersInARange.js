const range = (a, b) =>
  Array(Math.abs(a - b) + 1)
    .fill(a)
    .map((v, i) => v + i * (a > b ? -1 : 1));

function sumAll(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  const fullArr = range(arr[0], arr[1]);
  const result = fullArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );
  return result;
}

sumAll([1, 4]);
