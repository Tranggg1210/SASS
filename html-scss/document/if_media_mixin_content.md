# @if, @media và mixin có @content trong Sass
## I. Lý thuyết:
### 1. Câu lệnh điều kiện if 
```sh
@mixin move($direction: top-left) {
    position: absolute;

    @if $direction ==top-left {
        top: 0;
        left: 0;
    }

    @if $direction ==top-right {
        top: 0;
        right: 0;
    }

    @if $direction ==bottom-left {
        bottom: 0;
        left: 0;
    }

    @if $direction ==bottom-right {
        bottom: 0;
        right: 0;
    }

    @if $direction ==center {
        top: 50%;
        left: 50%;
        translate: -50% -50%;
    }
}
```
### 2. Sử dụng media queries trong Sass
```sh
.container {
    position: relative;
    background: #ccc;
    padding: 12px;
    @include grid(5, 12px);

    @media only screen and (max-width: 991px) {
        @include grid(3)
    }

    @media only screen and (max-width: 575px) {
        @include grid(1)
    }

    .item {
        background-color: olivedrab;
        padding: 32px 0;
        color: #fff;
    }
}
```
### 3. Mixin có content
```sh
 @media (max-width: 575px) {
    @content;
}
```

## II. Bài toán: Tạo một mixin "screen" giúp làm responsive dễ hơn

## III Partial, @import, @use, @forward
### 1. Partial, @import
- Có nghĩ là thành phần, để chia nhỏ file scss lớn thành các file nhỏ
- Quy ước đặt tên file partial là: _name.scss
- Sau đó dùng @import để nạp file partial vào 
- Các loại partial thường gặp:
    + variables
    + mixins
    + reset
    + common

    + header
    + navigation
    + sidebar
    + v.v
- Với file partial thì nó sẽ không được biên dịch sang file css, nó chỉ sử dụng để import thui
- Và với import thì nó có phạm vi áp dụng trên toàn bộ dự án(phạm vi toàn cục) 
- Cách sử dụng import
```sh
@import './base/variables';
@import './base/mixins';
@import './base/reset';
@import './base/common';
```
- Do phạm vi của import là global nên thứ tự import cũng rất quan trọng
### 2. @use, @forward
- Do import có rất nhiều nhược điểm và không phù hợp với các dự án vừa và trung trở lên, và hiện nay cũng không còn nhiều trình duyệt hỗ trợ nữa, nên hiện nay người ta sử dụng @use, và @forward
- Nhược điểm của import:
    + Làm mất đi tính module(và một thành phần không phụ thuộc vào các thành phần khác.)
    + Khái báo phạm vi toàn cầu
#### a. @use
- Có 3 thành phần trong use được module hóa là:
    + biến
    + mixin
    + hàm
- Cú pháp
```sh
@use "đường dẫn tới file scss cần import" [as "tên ngắn hơn"]
```
- Với base/variables là namespace
- Và muốn sử dụng được thì phải dùng namespace.[thuộc tính trong file cần dùng]

#### b. @forward 
- Nếu ta có thư mục base, trong thư mục base đó chứa các file như: reset, variables, mixins,..., thì trong thư mục base đó ta có thể thêm một file partial có tên là _**_index.scss**_ và sử dụng cú pháp  _**@use './base'**_ để import tất cả các file trong thư mục base vào file cần những import đó
- Trong file _index.scss ta bắt buộc phải dùng **@forward** để import các file vào 
```sh
@forward 'variables';
@forward 'mixins'
```
- Như vậy ta chỉ cần sử dụng một dòng duy nhất là 
```sh
@use '../base'

```
---> Để import tất cả các file trong thư mục base vào.
- Sử dụng cú pháp trên trong components
```sh
@use '../base';

.header {
    height: base.$header-height;
    background-color: base.$primary-color;
}
```
- Hoặc ta có thể sử dụng kiều khác như sau:
```sh
@use '../base' as *;

.header {
    height: $header-height;
    background-color: $primary-color;
}
```

