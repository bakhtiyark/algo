function factorialize(num) {
  let f = [];
  if (num == 0 || num == 1) {
    return 1;
  }
  if (f[num] > 0) {
    return f[num];
  }
  return f[num] = factorialize(num - 1) * num;
}

console.log(factorialize(5));
