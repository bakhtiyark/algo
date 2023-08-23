function frankenSplice(arr1, arr2, n) {
  let loc = arr2.slice();
  loc.splice(n, 0, ...arr1);
  return loc;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
