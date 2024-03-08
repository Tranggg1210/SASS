const name = 'Trang';
const name1 = 'Shoule use single quote!' // recommend
const formatName = `My name is ${name} ${1 + 2}`;

console.log(typeof String(123));

// Thao tác cơ bản với String
// Lấy ký tự tại vị trí index

const str = 'Easy Frontend';

console.log(str.charAt(3));
console.log(str[3]);

// Nỗi chuỗi
const a = 'Nguyễn';
const b = 'Trang';
console.log(a.concat(' ', b));
console.log(`${a} ${b}`); // recomment

// Duyệt chuỗi
for (let i = 0; i < str.length; i++)
    console.log(str[i]);

// Chuyển đổi hoa thường
console.log('Easy Frontend'.toLowerCase());
console.log('Easy Frontend'.toUpperCase());

// Tìm kiếm chuỗi con
const str1 = 'Hello, My name is Trang!!!';
console.log(str1.indexOf('name'));
console.log(str1.lastIndexOf('a'));

// Kiểm tra chứa chuỗi con
const str2 = 'Easy and Frontend';

console.log(str2.startsWith("Easy"));
console.log(str2.startsWith("easy"));
console.log(str2.startsWith("and"));

console.log(str2.includes('Easy'));
console.log(str2.includes('and'));
console.log(str2.includes('easy'));

console.log(str2.endsWith('Frontend'));
console.log(str2.endsWith('easy'));
console.log(str2.endsWith('and'));

// Làm việc với substring
/**
 * Sử dụng 1 trong 3 hàm đều được. Nhưng mà để gỡ rối, nhớ một hàm để sử dụng là slice thôi
 * substr thì theo MDN, nó được đánh giá là deprecated
 * slice và substring sử dụng khá tương đồng
 * slice thì hỗ trợ số âm. Số âm thì được đếm ngược từ cuối chuỗi
 * substring thì xem số âm là số 0
 * substring cho phép start > end, trong khi slice thì không hỗ trợ.
 * 
 * slice(start, end) --> negative means count from end, start can't be greater than end
 * substring(start, end) --> negative means 0, start can be greater than end
 * substr --> deprecated as in MDN docs
 */

const str3 = 'Hôm nay tui rất vui!!a';
console.log(str3.slice(0, 6));
console.log(str3.substring(6, 3));
console.log(str3.slice(-3, -1));

// Tìm kiếm và thay thế
/**
 * replace(searchFor, searchWith)
 * replaceAll(searchFor, searchWith);
 */

console.log('easy in out in on'.replace('in', 'and'));
console.log('easy in out in on'.replaceAll('in', 'and'));

// Tìm hiểu về split and join
// string to array: split();
// array to string: join(separator); separator(dải phân cách)

console.log('t-r-a-n-g'.split());
console.log('t-r-a-n-g'.split("-"));
console.log(['t', 'r', 'a', 'n', 'g'].join());
console.log(['t', 'r', 'a', 'n', 'g'].join("*"));

/**
 * Write a function to transform a string:
 * - The first letter in UPPERCASE
 * - The rest in lowercase
 * Eg: capitalize('easy FRontend') --> 'Easy Frontend'
 */

function capitalize(inputString) {
    if (!inputString.trim().length) return null;

    let processedString = (inputString[0].toUpperCase() + inputString.slice(1).toLowerCase()).replaceAll(/\s+/g, ' ');
    let resultString = '';
    for (let i = 0; i < processedString.length; i++)
        if (processedString[i].includes(' ')) {
            i++;
            resultString += (' ' + processedString[i].toUpperCase());
        } else resultString += processedString[i];

    return resultString.trim();
}

console.log(capitalize('tRang   ngUYEN   thi'));

// String exercise
// Check if a string contains an email address with '@gmail.com' or not

const isEmail = str => {
    if(str.trim() === '') return null;

    return str.includes('@gmail.com');
}

console.log(isEmail('nguyenthitrang@gmail.com'));
console.log(isEmail('bcd'));

// String exercise
// Write a JavaScript function  to parameterize a string.
// Eg: paramaterize('Code JS Is Fun') --> 'code-js-is-fun'

const paramaterize = str => {
    if(str.trim() === '') return null;

    return str.toLowerCase().split(' ').join("-");
}

console.log(paramaterize('Code JS Is Fun'));

// create a function 'truncate(text, maxlength)' that checks the length of the text and,
// if it exceeds maxlength - replaces the end of str with the ellipsis charater "..."
// to make its length equal to maxlength

// Horizontal ellipsis code is 8230. String.fromCodePoint(8230)
// UTF-16 '\u2026'
// https://www.compart.com/en/unicode/U+2026

const truncate = (text, maxlength) => {
    if(maxlength < 0 ) return null;

    if(text.length <= maxlength) return text;

    return text.slice(0,maxlength - 1).concat('\u2026');
    
}

console.log(truncate("trang", 3));