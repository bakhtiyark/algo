function sumAll(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let res = 0;
  for (let i = min; i <= max; i++) {
    res += i;
  }
  return res;
}

sumAll([1, 4]);
