// types-example.ts

// 1. Declare variables of the following types and assign appropriate values:

// number
let uninumber: number = 69;

// string
let uniqueString: string = 'Hello, Akrivia!';

// boolean
let isUnique: boolean = true;

// array of numbers
let uniqueNumbersArray: number[] = [10, 29, 36, 433, 59, 99, 88, 69, 108];

// tuple with elements of type string and number
let uniqueTuple: [string, number] = ['VISHAL', 100];

// enum for days of the week
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let today: DaysOfWeek = DaysOfWeek.Saturday;
