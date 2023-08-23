function bouncer(arr) {
  return arr.filter((element) => Boolean(element) !== false);
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(Boolean(7))