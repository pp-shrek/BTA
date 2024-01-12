function fibonacci(n) {
  const fibonacci = [];
  const message = "Only positive numbers allowed";
  const counter = 0;
  if (n < 0) {
    return undefined;
  } else if (n === 0) {
    return fibonacci;
  } else {
    fibonacci = [1];
    counter = 0; }
  n1 = 0;
  n2 = 1;
  while (counter < n) {
    let sum = n1 + n2;
    fibonacci.push(sum);
    n1 = n2;
    n2 = sum;
    counter = counter + 1;
  }
  return fibonacci;
}