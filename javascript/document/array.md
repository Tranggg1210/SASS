## Tổng quan về array

### Khai báo mảng
- [x] Đặt tên nên dùng suffix là List. Eg: dùng numberList thay vì numbers
- [x] Mỗi phần tử có thể có một kiểu dữ liệu khác nhau
```sh
const numberList = [];

const numberList = [1,2,3]; // a list of numbers
const wordList = ['Easy', 'JS'] // a list of strings
const flagList = [true, false, false] // a list of boolean

// a list of students
const studentList = [
    {id: 1, name: 'Van A'},
    {id: 2, name: 'Van B'},
    {id: 3, name: 'Thi C'}
]

// a list of list
const board = [
    [1,2],
    ['a','b','c'],
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
    {id: 1, name: 'Easy'},
    [1,2,3]
]; 
```

### Sự khác biệt của cách khai báo [] và new Array() 
```sh
const b = [42];
console.log(b.length); //1
const c = new Array(42)
console.log(c.length); // 42
```

### Truy xuất phần tử của mảng
- [x] Dùng square brackets để truy xuất phần tử tại vị trí index
- Index của mảng bắt từ 0
- Nếu length của mảng bằng 3 thì index lớn nhất là length - 1 = 2

```sh
    const numberList = [3,5,7]; // recommeded

    numberList[0]; //3
    numberList[1]; //5
    numberList[2]; //7

    numberList.length; //3
    numberList[numberList.length - 1]; // 7 (the last element) 
```

### Mảng 2 chiều
```sh
const boardList = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
] 

boardList[0]; // [1,2,3]
boardList[1]; // [4,5,6]
boardList[2]; // [7,8,9]

boardList[0][1]; //2
boardList[1][2]; //6

```

### Giới thiệu về Array Object
- [x] Static methods

| #         | Name                  | Desc                                                      |
| :--       | :--                   | :--                                                       |
| 1         | Array.isArray(arr)    | Kiểm tra arr có phải là mảng không?                       |
| 2         | Array.from()          | Tạo mảng mới từ các dữ liệu khác như: Set, Iterable,...   |  

1. Chuyển đổi một đối tượng dạng array-like thành một mảng thực sự:
```sh
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const array = Array.from(arrayLike);
console.log(array); // Output: ['a', 'b', 'c']
```

2. Tạo một mảng mới từ một chuỗi:
```sh
const str = 'hello';
const array = Array.from(str);
console.log(array); // Output: ['h', 'e', 'l', 'l', 'o']
```

3. Chuyển đổi một danh sách các đối tượng thành một mảng:
```sh
const nodeList = document.querySelectorAll('div');
const array = Array.from(nodeList);
```

4. Thực hiện ánh xạ (map) trên mảng kết quả:
```sh
const numbers = [1, 2, 3, 4, 5];
const squares = Array.from(numbers, x => x * x);
console.log(squares); // Output: [1, 4, 9, 16, 25]
```
5. Xử lý các giá trị trống hoặc undefined khi chuyển đổi mảng:
```sh
const arrWithEmpty = [1, , 3, , 5];
const cleanArray = Array.from(arrWithEmpty, x => x || 0);
console.log(cleanArray); // Output: [1, 0, 3, 0, 5]
```

6. Sử dụng với Set để chuyển đổi một Set thành một mảng:
```sh
const set = new Set([1, 2, 3, 4, 5]);
const array = Array.from(set);
console.log(array); // Output: [1, 2, 3, 4, 5]
```

- [x] Instance props
```sh
 const numberList = [1,2,3];
 numberList.length; //3
```

- [x] Instance methods
1. Nhóm hàm kiểm tra phần tử có tồn tại không

| #  | Name                         | Desc                                              |
|:-- | :--                          | :--                                               |
| 1  | every(callbackFn)            | Kiểm tra tất cả phần tử thỏa điều kiện            |
| 2  | some(callbackFn)             | Kiểm tra có một phần tử thỏa điều kiện            |
| 3  | indexOf(searchElement)       | Tìm vị trí đầu tiên của phần tử searchElement     |
| 4  | lastIndexOf(searchElement)   | Tìm vị trí cuối cùng của phần tử searchElement    |
| 5  | includes(searchElement)      | Kiểm tra có chứa phần tử searchElement không      |
| 6  | find(callbackFn)             | Tìm phần tử đầu tiên thỏa điều kiện               |
| 7  | findIndex(callbackFn)        | Tìm vị trí của phần tử đầu tiên thỏa điều kiện    |

2. Nhóm hàm thêm phần tử

| #   | Name                                        | Desc                  |
| :-- | :--                                         | :--                   |
| 1   | push(element0,...,elementN)                 | Thêm cuối mảng        |
| 2   | pop()                                       | Xóa cuối mảng         |
| 3   | shift()                                     | Xóa đầu mảng          |
| 4   | unshift(element0,...,elementN)              | Thêm đầu mảng         |
| 5   | splice(start, deleteCount, item1,...,itemN) | Xóa/thêm giữa mảng    |

3. Nhóm hàm hay sử dụng

| #   | Name                | Desc                                              |
| :-- | :--                 | :--                                               |
| 1   | forEach(callbackFn) | Duyệt mảng                                        |
| 2   | map(callbackFn)     | Biến đổi mảng                                     |
| 3   | filter(callbackFn)  | Lọc mảng theo điều kiện                           |
| 4   | slice(start, end)   | Lấy mảng con                                      |
| 5   | reduce()            | Duyệt mảng và tính toán cho ra kết quả cuối cùng  |

4. Và một số hàm khác

| #   | Name                                    | Desc                          |
| :-- | :--                                     | :--                           |
| 1   | fill(value,start = 0, end = arr.length) | Fill value từ start tới end   |
| 2   | join()                                  | Biến đổi mảng thành chuỗi     |
| 3   | concat()                                | Nối mảng                      |
| 4   | reverse()                               | Đảo ngược mảng                |
| 5   | sort()                                  | Sắp xếp mảng                  |
