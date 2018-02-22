function countTo(num){
    const result = [];
  for (let i = 0; i <= num; i++) {
    if (i % 15 === 0) {
      result.push('fizzbuzz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(countTo(10));

