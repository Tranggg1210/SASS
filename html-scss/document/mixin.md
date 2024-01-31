# Mixin
### I) Mixin:
#### 1. Không có tham số
```sh
@mixin flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}
```
#### 2. Có tham số
```sh
@mixin size($width, $height) {
    width: $width;
    height: $height;
}
```
Tham số mặc định:
```sh
@mixin size($width: 200px, $height: 200px) {
    width: $width;
    height: $height;
}
```
Dùng tham số trước đó làm mặc định
```sh
@mixin rounded($tl, $tr: $tl, $br: $tl, $bl: $tl) {
    border-radius: $tl $tr $br $bl;
}
```
Truyền đối số theo tên
```sh
@include rounded(8px, $bl: 16px);
```
3. Mixin lồng mixin
### II) Bài toán: Tạo mixin "grid"
    - Tạo grid layout có theo hàng và cột
    - Có tham số "column" và spacing
    - Kết hợp sử dụng biến CSS & biến Sass