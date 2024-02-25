// falsy
/**
 * null
 * false
 * underfile
 * 0, -0, 0n
 * '' or "" or ``
 * NaN
 * document.all
 */

// console.log(!!-0);

// Nếu là số dương thì
function checkNumber1(n) {
    if (n > 0) {
        console.log("Đây là số dương");
    }
}

// Nếu là số dương chẵn thì...
function checkNumber2(n) {
    if (n > 0 && n % 2 == 0) {
        console.log("Đây là số dương chẵn");
    }
}

// Nếu là số dương chẵn và lớn hơn 10 thì...
function checkNumber3(n) {
    if (n > 10 && n % 2 == 0) {
        console.log("Đây là số dương chẵn và lớn hơn 10");
    }
}

// Nếu là số dương chắn chia hết cho 5 và lớn hơn 10 thì...
function checkNumber4(n) {
    if (n > 10 && n % 5 == 0 && n % 2 == 0) {
        console.log("Đây là số dương chẵn chia hết cho 5 và lớn hơn 10");
    }
}

// Nếu là số dương chẵn hoặc số âm lẻ thì...
function checkNumber5(n) {
    if ((n > 0 && n % 2 == 0) || (n < 0 && n % 2 != 0)) {
        console.log("Đây là số dương chẵn hoặc số âm lẻ");
    }
}

console.log("null == undefined: ", null == undefined); // true
console.log("'2' > '1': ", '2' > '1'); // true
console.log("null == 0: ", null == 0);// false
console.log("null >= 0: ", null <= 0); // true
console.log("'' == 0: ", '' == 0); // true
console.log("nan == 0", NaN == 0); // false
console.log("nan >= 0", NaN >= 0); // true
console.log("undefined >= 0: ", undefined >= 0);// false
console.log("'' == 0: ", '' == 0); // true
const student1 = { name: 'a' };
const student2 = { name: 'a' };

console.log(student1 == student2);
console.log('123' > 111);


// Write a function to check if a number a positive even number
// If yes, retrun true. Otherwise return false

const isPositiveEvenNumber = (n) => (n % 2 === 0 && n > 0);


console.log(isPositiveEvenNumber(5));
console.log(isPositiveEvenNumber(10));
console.log(isPositiveEvenNumber(-10));

// Write a function to classify student
// Receive mark as a number, output as below:
// mark > 8         --> 'Excellence'
// 7 <= mark <= 8   --> 'Good'
// 4 <= mark <= 6   --> 'Not Good'
// mark < 4         --> 'Bad'

const handleClassifyStudent = (mark) => {
    if (mark < 0 || mark > 10) return 'Invalid mark';

    if (mark > 8) return 'Excellence';
    if (7 <= mark) return 'Good';
    if (4 <= mark) return 'Not Good';

    return 'Bad';
}
console.log(handleClassifyStudent(3));

// A list of error codes from server
// E01: Invalid username or password
// E02: Too many attempts
// E03: Missing data
// Other code: Something went wrong
// Write a function that take errorCode and return the according message

function getErrorMessage(errorCode) {
    const errorMap = {
        E01: "Invalid username or password",
        E02: "Too many attempts",
        E03: "Missing data"
    };

    return errorMap[errorCode] || 'Something went wrong';
}

console.log(getErrorMessage("E01"));