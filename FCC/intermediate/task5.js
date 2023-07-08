function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.toLowerCase().replaceAll(/\s+|\_+/g, "-");
}

console.log(spinalCase("This Is Spinal Tap"));
