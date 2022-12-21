const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// Concatenando arrays
const a3 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];
console.log(a3); // output: [1, 2, 3, 'Luiz', 4, 5, 6, 7, 8, 9]
