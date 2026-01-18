// Also implement with Python(Todo)
function factorial(number) {
  if(number < 0) {
    return
  }

  if (number === 0 || number === 1) {
    return 1;
  }

  return number * factorial(number - 1)

}

console.log(factorial(4))