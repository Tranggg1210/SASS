const count = 1;
const mark = 9.5;

const long = 1000000;
const longer = 1_000_000; // rare usage
const short = 1e6; // usually see this

const smaller = 0.0001;
const smallerShort = 1e-4;

// Static properties là có thể dùng number.tên phương thức hoặc tên biến
console.log(Number.MAX_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

// Instance methods là phải tạo biến xong dùng tên biến với phương thức
let n1 = 2;
console.log(n1.toExponential());

// Convert to numbers(parseInt and ParseFloat)
Number('123'); // 123
Number.parseInt('1.5'); // 1.5
Number.parseFloat('1.5'); // 1.5

Number('123.5a'); // NaN
Number.parseInt('123.5a'); // 123
Number.parseFloat('123.5a'); // 123.5

Number(null); // 0
Number(undefined); // Nan

// toString(base)
const n = 20;
console.log(n.toString());
console.log(n.toString(2));
console.log(n.toString(8));
console.log(n.toString(10));
console.log(n.toString(16));

/** Phân biệt toFixed() với toPrecision()
 * toFixed() và toPrecision() đều chuyển hướng từ number thành string
 * toFixed(digits) thì cố định số lượng digits sau dấu chấm
 * toPrecision(digits) thì làm tròn tới digits số có nghĩa 
 *  */

const a = 123.525;
a.toFixed(); // 124 as default value for arg is 0
a.toFixed(0); //124
a.toFixed(1); //123.5
a.toFixed(2); //123.53
a.toFixed(3); //123.525
a.toFixed(4); //123.5250
a.toFixed(4); //123.52500

const b = 123.525;
b.toPrecision(); // 123.525 similar to n.toString();
b.toString(); // 123.525;

b.toPrecision(0); // error argument must be between 1 and 100
b.toPrecision(1); // 100
b.toPrecision(2); // 120
b.toPrecision(3); // 124
b.toPrecision(4); // 123.5
b.toPrecision(5); // 123.53
b.toPrecision(6); // 123.525
b.toPrecision(7); // 123.52500
b.toPrecision(8); // 123.52500

// Imprecise Calculations
console.log((0.1).toFixed(20));
console.log((0.2).toFixed(20));
console.log((0.1 + 0.2).toFixed(20));
console.log((0.3).toFixed(20));

console.log(0.1 + 0.2 - 0.3);
console.log(0.1 + 0.2 === 0.3);
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
console.log((0.1 + 0.2).toFixed(1) === (0.3).toFixed(1));

// Random number in JS: Math.random() -> [0,1)
// 1. Random một số ngẫu nhiên trong khoảng [0,n]
// 2. Random một số ngẫu nhiên trong khoảng [a,b] với a<b

const randomNumber = (n) => n < 0 ? (-1) : (Math.round(Math.random() * n));
console.log(randomNumber(10));

const randomNumberInRange = (a, b) => {
    if (a > b) return -1;

    return Math.round(Math.random() * (b - a) + a);
}
console.log(randomNumberInRange(3, 6));
console.log(randomNumberInRange(3, 6));
console.log(randomNumberInRange(3, 6));
console.log(randomNumberInRange(3, 6));
console.log(randomNumberInRange(3, 6));
console.log(randomNumberInRange(3, 6));
console.log(randomNumberInRange(3, 6));
console.log(randomNumberInRange(3, 6));
console.log(randomNumberInRange(3, 6));
console.log(randomNumberInRange(3, 6));
console.log(randomNumberInRange(3, 6));

// 1. Write a function to calculate the area of a rectangle
const calcAreaOfRectangle = (a, b) => {
    if (a <= 0 || b <= 0) return -1;

    return a * b;
}

// 2. Write a function to check if a number is odd/even
const isEven = (n) => n % 2 === 0;
console.log(isEven(4));
console.log(isEven(1));

const isOdd = (n) => n % 2 !== 0;
console.log(isOdd(4));
console.log(isOdd(3));

// 3. Write a function to check if a number is divisible by 5
const isDevisibleBy5 = (n) => n % 5 === 0;

console.log(isDevisibleBy5(10));
console.log(isDevisibleBy5(8));

// 4. Write a function to check if a number is perfect square
const isPerfectSquare = n => {
    if (n <= 0) return false;

    let sqrtInt = Math.trunc(Math.sqrt(n));

    return sqrtInt * sqrtInt == n;
}

console.log(isPerfectSquare(5));

// 5. Convert hours to seconds
// c1:
// const convertHoursToSeconds = hours => {
//     if(hours < 0) return -1;

//     const SECONDS_PER_HOUR = 3600;
//     return  hours * SECONDS_PER_HOUR;
// }

//c2:
const convertHoursToSeconds = hours => hours < 0 ? -1 : hours * 3600;

// 6. Given 3 numbers, find max
const findMax = (a, b, c) => {
    let max = a;

    if (max < b) max = b;
    if (max < c) max = c;

    return max;
}
// 7. Given 3 numbers, find max even number

const findMaxEven = (a, b, c) => {
    let max = Number.NEGATIVE_INFINITY;

    if (a % 2 === 0) max = a;
    if (b % 2 === 0 && b > max) max = b;
    if (c % 2 === 0 && c > max) max = c;

    return max;
}
// --> Đây là kỹ thuật lính canh

console.log(findMaxEven(2, 6, 4));
console.log(findMaxEven(9, 6, 4));
console.log(findMaxEven(9, 3, 1));

// 8. Get the ones of a number having 3 digits
const extractTheOnes = n => {
    if ((n.toString()).length !== 3) return null;

    return n % 10;
}

// 9. Get the tens of a number having 3 digits
const extractTheTens = n => {
    if ((n.toString()).length !== 3) return null;

    return Math.trunc(n / 10) % 10;
}

console.log(extractTheTens(123));
console.log(extractTheTens(193));

// 10. Get the hundreds of a number having 3 digits
const extractTheHundreds = n => {
    if ((n.toString()).length !== 3) return null;

    return Math.trunc(n / 100);
}

console.log(extractTheHundreds(399));
console.log(extractTheHundreds(699));

// 11. Sum all digits of a number having 3 digits
const sumAllDigits = n => {
    if ((n.toString()).length !== 3) return null;

    const ones = n % 10;
    const tens = Math.trunc(n / 10) % 10;
    const hundreds = Math.trunc(n / 100);

    return ones + tens + hundreds;
}

console.log(sumAllDigits(223));