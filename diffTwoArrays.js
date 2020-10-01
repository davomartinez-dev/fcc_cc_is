function diffArray(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  let result;

  result = new Set([...set1].filter(x => !set2.has(x)));
  result = result.add([...set2].filter(x => !set1.has(x)));

  console.log(Array.from(result).flat());
  return Array.from(result).flat();
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(
  ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'],
);
diffArray(
  ['andesite', 'grass', 'dirt', 'dead shrub'],
  ['andesite', 'grass', 'dirt', 'dead shrub'],
);
diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']);
