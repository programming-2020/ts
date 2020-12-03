/**
 * Annotations - simple example
 */

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];

class Car { };

let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// '(i: number) => void ' is annotation, decription of a function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};