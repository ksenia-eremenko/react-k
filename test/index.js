function expressionMatter(a, b, c) {
  let result1 = a * (b + c);
  let result2 = a * b * c;
  let result3 = a + b * c;
  let result4 = (a + b) * c;
  return Math.max(result1, result2, result3, result4);
}
console.log(expressionMatter(1,2,3));