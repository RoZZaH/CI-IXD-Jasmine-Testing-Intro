const fizzBuzz = function(n) {
  if((n%3 === 0) && (n%5 === 0))
  //  console.log("Fizz-Buzz!") need curly-braces if over 1 line
    return "Fizz-Buzz!"
  if(n%3 === 0)
 //   console.log("Fizz!")
    return "Fizz!"
  if(n%5 === 0)
 //   console.log("Buzz!")
    return "Buzz!"
  return n
}