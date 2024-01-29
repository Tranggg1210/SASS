## Extend và Placeholder selector trong Sass 
- Với các thuộc tính có cùng kiểu định dạng thì ta có thể dùng từ cú pháp
```sh
@extend + tên class/id/tag...
```
- VD:
```sh
.btn{
    padding: 8px;
    margin: 0 16px;
    background: #000;
    color: #fff;
}
.btn-primary{
    @extend .btn;
    background: blue;
}
.btn-secondary{
    @extend .btn;
    background: green;
}
```
==> Như vậy hai nút button có hai class riêng biệt đều được thừa kế từ class .btn. Giả sử khi ta không muốn kế thừa class .btn nữa mà vẫn muốn giữ nó cho các nút khác nhưng bên file css vẫn biên dịch class .btn.
- Để Không biên dịch class .btn ra file css ta dùng placeholder selector
```sh
%btn{
    padding: 8px;
    margin: 0 16px;
    background: #000;
    color: #fff;
}
.btn-primary{
    background: blue;
}
.btn-secondary{
    background: green;
}
```
===> Class .btn chỉ được biên dịch khi gặp từ khóa extend giúp phần tử button kế thừa các thuộc tính từ class .btn 