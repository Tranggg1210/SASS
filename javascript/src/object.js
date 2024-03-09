const person = {
    id: 1,
    name: 'Trang',
    isHero: true,
    'key has space': 'super',

    sayHi() {
        console.log('Hello!');
    }
}

const student1 = {
    id: 1,
    name: 'Trang',
    isHero: true
}

// update value of a key
student1.name = 'Nguyen Thi Trang';

// simply set new key for object
student1.age = 18;
student1['mark'] = 10;

delete student1.age;
console.log(student1.age);

// Pass by value vs pass by reference
function changePrimitive(name, age) {
    name = 'Easy Frontend';
    age = 18;
}

let name = 'Trang';
let age = 21;
changePrimitive(name, age);

console.log(name); // 'Trang'
console.log(age); // 21

function changeReference(student) {
    student.name = 'Trang';
    student.age = 18;
}

const student8 = {
    name: 'Easy',
    age: 17
}
changeReference(student8);

const name1 = 'Easy Frontend';
const age1 = 18;

const student1 = {
    name1: name1,
    age1: age1
}

// shorthand (recommended)
const student2 = {
    name1,
    age1
}

const student3 = {
    name3: 'Easy Front',
    age3: 18
}

// old way
const name4 = student3.name3;
const age4 = student3.age3;

// new way usign object destructuring
const { name3, age3 } = student3; // recommended
console.log(name3, age3);

const student5 = {
    name: 'Trang',
    age: 18
}

console.log('name' in student5); // true
console.log('age' in student5); // true
console.log('isHero' in student5); // false

const student6 = {
    name: 'Easy Frontend',
    age: 18
}

const moreProps = {
    name: 'Hà',
    isHero: true,
    gender: 'male'
}

// v1: using Object.assign()
const cloneStudent = Object.assign({}, student6, moreProps)
console.log(cloneStudent);

// v2: using spread operator(shorter, easier to read)
const cloneStudent2 = {
    ...student6,
    ...moreProps
}
console.log(cloneStudent2);

// Deep clone object
const student7 = {
    name: 'Easy Frontend',
    age: '18',

    mark: {
        math: 10,
        english: 7
    }
}

const cloneStudent3 = {
    ...student7,
}

cloneStudent3.mark.math = 1;
console.log(student7.mark.math); // 1

// solution, clone nested levels if any
const cloneStudent4 = {
    ...student7,
    mark: {
        ...student7.mark
    }
}

cloneStudent4.mark.math = 8;
console.log(student7.mark.math);

// duyệt key của object

const room = {
    width: 20,
    height: 10,
    area: 16,
}

const keyList = Object.keys(room);
for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i];

    console.log('key: ', key);
    console.log('value: ', room[key]);
}

// or a similar way using forEach
keyList.forEach(key => {
    console.log('key: ', key);
    console.log('value: ', room[key]);
})

// or for...in --> recommended 
for (let key in room) {
    console.log('key: ', key);
    console.log('value: ', room[key]);
}

// object exercises
// 1. Create an object student with name is Easy Frontend and age is 18
// 2. Check if an object us empty(means have no keys)
// 3. Get average mark of an object
// calcAvMark({math: 10, english: 8}) --> 9

const student = {
    name: 'Easy Frontend',
    age: 18
}

const isObjectEmpty = (student) => Object.keys(student).length <= 0;
// console.log(isObjectEmpty(student));

const calcAvMark = (obj) => {
    if (isObjectEmpty(obj)) return null;
    // if(!obj) return -1;

    let sum = 0, length = 0;
    for (let key in obj) {
        sum += obj[key];
        length++;
    }

    return (sum / length).toFixed(2);
}

console.log(calcAvMark({ math: 10, english: 8, history: 7 }));