// Khai báo
// const numberList = [];

const numberList = [1, 2, 3]; // a list of numbers
const wordList = ['Easy', 'JS'] // a list of strings
const flagList = [true, false, false] // a list of boolean

// a list of students
const studentList = [
    { id: 1, name: 'Van A' },
    { id: 2, name: 'Van B' },
    { id: 3, name: 'Thi C' }
]

// a list of list
const board = [
    [1, 2],
    ['a', 'b', 'c'],
    [true, false, false, false]
]

// a list of mixed data type
const mixedList = [
    1,
    2,
    'word',
    true,
    null,
    underfile,
    { id: 1, name: 'Easy' },
    [1, 2, 3]
];

// Truy xuất
numberList[0]; //3
numberList[1]; //5
numberList[2]; //7

numberList.length; //3
numberList[numberList.length - 1]; // 7 (the last element) 

// Mảng hai chiều
const boardList = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

boardList[0]; // [1,2,3]
boardList[1]; // [4,5,6]
boardList[2]; // [7,8,9]

boardList[0][1]; //2
boardList[1][2]; //6

const b = [42];
console.log(b.length);
const c = new Array(42)
console.log(c.length);

const d = [1, 2].fill(true); // fill sẽ biến tất cả các giá trị trong mảng thành true
console.log(d); // [true, true]

// array destructuring

const e = [1, 2, 3];

// old way
const first1 = e[0]; //1
const second1 = e[1]; //2
const third1 = e[2]; // 3

// similar but new way
const [first2, second2, third2] = e;

// or even direct array
const [first3, second3, thirst3] = [3, 4, 5, 6, 7, 8];

// rest operator(...)
const [first, second, third, ...rest] = [3, 5, 7, 9, 11];
console.log(rest);

const k = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const h = [...k[0], ...k[1], ...k[2]];
h[0][1] = 22;
console.log(k);

// Duyệt các phần tử của array
/**
 * before ES5: for...i
 * ES5: forEach
 * ES6: for...of
 */

// for i
console.log("for-i");
const m = [1, 2, 3, 4, 5];
for (let i = 0; i < m.length; i++) {
    const number = m[i];
    console.log(number);
}

// for each dùng khi cần index, và có thể dùng khi sử lý nhiều bước
console.log("for-each");
m.forEach((number, index) => console.log(number, " - ", index))

// for-of không có index 
console.log("for-of");
for (const number of m) {
    console.log(number);
}

// Thêm xóa phần tử
const f = [1, 2, 3];

// Add new items at the end
f.push(5)
console.log(f); // [1,2,3,5];

// Remove items at the end
f.pop();
console.log(f); // [1,2,3]

// At new item at the beginning
f.unshift(5);
console.log(f);

//  Remove items at the beginning
f.shift();
console.log(f);

// Add/remove items at the middle of an array
f.splice(0, 0, 2, 4);
console.log(f);

// Kiểm tra sự tồn tại của phần tử
console.log([1, 2, 4].every(x => x % 2 == 0));
console.log([1, 2, 4].some(x => x % 2 == 0));
console.log([1, 2, 3].indexOf(3));
console.log([1, 2, 3].lastIndexOf(4));
console.log([1, 2, 3].includes(2));

//Tìm kiếm phần tử
console.log([2, 3, 1].find(x => x % 2 !== 0));
console.log([2, 3, 1].findIndex(x => x % 2 !== 0));
console.log([1, 2, 3].filter(x => x % 2 == 0));

// Transform array với hàm map();
// Dùng hàm map(transformFn) để biến đổi các phần tử này sang phần tử khác
// Lưu ý số lượng phần tử không thay đổi
// Điều thay đổi ở đây là mỗi phần tử sẽ bị biến đổi theo một công thức giống nhau
// Kết quả trả về là một mảng mới

console.log([1, 2, 5].map(x => x * 2));
console.log(['Trang', "Nguyen"].map(x => `hello ${x}`));

const mapingFunction = (arr, mappingFn) => {
    if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined;

    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(mappingFn(arr[i], i))
    }

    return newArray;
}

console.log(mapingFunction([1, 2, 3], x => x * 2));
console.log(mapingFunction([1, 2, 3], (x, i) => i % 2 === 0 ? x * 2 : x + 1));

// Lọc mảng theo điều kiện với hàm filter()
// Dùng hàm filter(callbackFn) để lọc mảng theo điều kiện cho trước
// Kết quả trả về là một mảng con mới

const numberList1 = [1, 3, 5, 2, 7];
numberList1.filter(x => x % 2 === 0);

// Sắp xếp mảng với hàm sort()
/**
 * Trogn Javascript, có hỗ trợ sẵn hàm sort(compareFn) để sắp xếp mảng theo điều kiện mong muốn
 * Nếu là null/underfiled thì auto được cho xuống cuối mảng, null đứng trước, tới underfined.
 * Nếu hàm compareFn không được cung cấp, các phần tử sẽ được chuyển về strings để thực hiện so sánh
 * Nếu compareFn(a,b) được cung cấp thì dựa vào kết quả của hàm để xác định:
 *      KQ < 0, a sẽ đứng trước b
 *      KQ = 0, a và b như nhau
 *      KQ > 0, a sẽ đứng sau b
 * Hàm sort() sẽ trả về mảng sau khi sort(nhưng đây là mảng hiện tại, không phải mảng mới)
 */
console.log([1, 2, null, 5, undefined, null].sort());
console.log([1, 4, 3, 2].sort());
console.log(['23', '99', '44', '12'].sort((a, b) => b - a));

// Duyệt mảng và tính toán với hàm reduce()
// Dùng hàm reduce() khi có nhu cầu duyệt qua từng phần tử và tính toán ra một kết quả cuối cùng
// Nếu reduce có mảng chuyền vào là một mảng rỗng đồng thười không có initialValue thì hàm reduce sẽ trả về lỗi, còn nếu có initialValue thì sẽ trả về initialValue
const numberList2 = [2, 4, 6];
console.log(numberList2.reduce((sum, number) => sum + number));

// Write a function to find the longest word
const wordList1 = ['trang', 'nguyen', 'thi'];

const findLongestWordI = (arr) => {
    if (!Array.isArray(arr)) return undefined;

    let longlestWord = arr[0];
    for (let i = 1; i < arr.length; i++)
        if (longlestWord.length < arr[i].length)
            longlestWord = arr[i];

    return longlestWord;
}

console.log(findLongestWordI(wordList1));

// c2
const findLongestWordEach = (arr) => {
    if (!Array.isArray(arr)) return undefined;

    let longlestWord = arr[0];
    arr.forEach(word => {
        if (longlestWord.length < word.length)
            longlestWord = word;
    })

    return longlestWord;
}

console.log(findLongestWordEach(wordList1));

const findLongestWordReduce = (arr) => {
    if (!Array.isArray(arr)) return undefined;

    return arr.reduce((total, cur) => total.length < cur.length ? cur : total)
}
console.log(findLongestWordReduce(wordList1));