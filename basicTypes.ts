// Boolean
let isDone: boolean = false;

// Number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
  let color: string = "blue";
  color = 'red';
  let sentence: string = 
  `Hello, my color is ${ color }. I am good color`;
  // (Template String)


  // Array
  let list: number[] = [1, 2, 3];
  let list1: Array<number> = [1, 2, 3]; //uses a generic array type, Array<elemType>

//   Tuple
//   Tuple types allows you to express an array where the type of a fixed number of elements is known, 
//   but, they need not be the same. For example, we can express
//   a values as a pair of a string and number

  // Declare a tuple type
  let x: [string, number];

  // Initialize it
  x = ["hello", 10]; // OK
  
  // Initialize it incorrectly
  // x = [10, "hello"]; // Error