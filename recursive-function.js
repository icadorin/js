// Invoca ela mesma

console.log("Recursiva: ");

function recursive(max) {
  console.log(max);
  if (max >= 10) {
    return;
  }
  max++;
  recursive(max);
} // output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

recursive(0);
