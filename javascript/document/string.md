## Tổng quan về string trong js

### Quotes (khai báo)
- [x] Single or double quotes
- [x] Using backticks for formating string, span muitiple lines
- [x] String in Js is case-sensitive
```sh
  const name = 'Trang';
  const name1 = 'Shoule use single quote!' // recommend
  const formatName = `My name is ${name} ${1 + 2}`
```

### Basic 
- [x] Javascript không có kiểu dữ liệu cho từng ký tự, chỉ dùng chung một kiểu dữ liệu là **string**
- [x] String trong javascript sử dụng character encoding UTF-16
- [x] Mình có những loại character encoding khác như: ASCII (7 bits), UFT-8 (8 bits), UTF-16 (16 bits), UTF-32 (32 bits)
- [x] String is immutable

### String - A primitive wrapper object
- [x] Instance property:
``` sh
  let name = 'Trang';
  name.length
```
- [x] Instance Methods:

| #  | Name                                     | Desc                                                |
|:-- | :---                                     | :---                                                |
| 1  | charAt(index)                            | Lấy ký tự tịa vị trí index                          |
| 2  | concat(str[,...strN])                    | Nỗi chuỗi                                           |
| 3  | includes(searchString[,position])        | Có chứa chuỗi nào đó không?                         |
| 4  | startsWith(searchString [, length])      | Có bắt đầu với chuỗi searchString                   |
| 5  | endsWith(searchString [,length])         | Có kết thúc với chuỗi searchString                  |
| 6  | indexOf(searchValue, [,fromIndex])       | Vị trí đầu tiên có searchValue                      |
| 7  | lastIndexOf(searchValue [, fromIndex])   | Vị trí cuối cùng có searchValue                     |
| 8  | match(regexp)                            | Liên quan tới regular expresion                     |
| 9  | matchAll(regexp)                         | Liên quan tới regualar expresion                    |
| 10 | padStart(targetLength [,padString])      | Thêm vào đầu String                                 |
| 11 | padEnd(index)                            | Thêm vào cuối string                                |
| 12 | repeat(count)                            | Nhân chuỗi hiện tại lên count lần                   |
| 13 | replace(searchFor, replaceWith)          | Thay thế chuỗi searchFor đầu tiên bằng replaceWith  |
| 14 | replaceAll(searchFor, replaceWith)       | Thay thế tất cả chuỗi searchFor bằng searchWith     |
| 15 | slice(beginIndex, [, enđInex])           | Lấy chuỗi con                                       |
| 16 | substring(indexStart [, endIndex])       | Lấy chuỗi con                                       |
| 17 | split([sep [, limit]])                   | Tách chuỗi thành mảng các chuỗi con                 |
| 18 | trim()                                   | Bỏ khoảng trắng đầu + cuối string                   |
| 19 | trimStart()                              | Bỏ khoảng trắng đầu string                          |
| 20 | trimEnd()                                | Bỏ khoảng trắng cuối string                         |
| 21 | toLowerCase()                            | Chuyển chuỗi thành chữ viết thường                  |
| 22 | toUpperCase()                            | Chuyển chuỗi thành chữ viết hoa                     |
