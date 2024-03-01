// functions-example.ts

// Write a function called add that takes two parameters of type number and returns their sum.
function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  // Write a function called capitalize that takes a parameter of type string and returns the capitalized version of it.
  function capitalize(inputString: string): string {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }
  
  // Example usage:
  const sumResult: number = add(5, 7);
  const capitalizedString: string = capitalize('angular');
  
  console.log('Sum:', sumResult); // Output: Sum: 12
  console.log('Capitalized String:', capitalizedString); // Output: Capitalized String: Angular
  