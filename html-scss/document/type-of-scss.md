# Type of Scss
- Trong Scss có các kiểu dữ liệu sau:
    + number: 
        ``` sh
        $header-height:28px;
        ```
    + string: 
        ```sh
        $name: "Nguyễn Thị Trang";
        ```
    + color: 
        ```sh
        $primary-color: green;
        $secondary-color: rgba($color: $primary-color, $alpha: 0.5)

        -> Cách kiểm tra biến secondary có lỗi không: @debug $secondary-color ;
        ```
    + lists
        ```sh
        $color: red green blue yellow;
        ```
    + Maps:
        ```sh
        $break-points: ("mobile": 575px, "tablet": 768px, "desktop": 991px);
        ```
    + Boolean:
        ```sh
        $success: true;
        $error: false;
        ```
    + Null

    + Các loại toán tử: 
        - equality (== , !=)
            ```sh
                @if 10 == 20{
                    .box{
                        weight: 100px;
                        height: 100px;
                    }
                }
            ```
        - relation(>, <, >=, <=)
        - numberic(+, -, *, /, %)
        - dùng thư viện cho các phép tính cộng trừ nhân chia
            ```sh
            @use "sass:math";    
            ```
        - Logic(not, and, or)         
        - Interpolation: 
            ```sh 
            #{}
            ```
    - if, else, for, each
        + if-else
            ```sh
            h1{
                @if $condition {
                    color: red;
                }@else {
                    color:green;
                }
            }

            Hoặc

            h1{
                color: if($condition, green, red);
            }
            ```    
        + each
            ```sh
            Với lists:
            $break-points: 575px 768px 991px;
            @each $break-point in $break-points
            {
                @debug $break-point;
            }

            Với maps:
            $bolds: (
                "regular": 400,
                "semibold": 500,
                "bold": 600
            )
            @each $infix, $bold in $bolds{
                @debug $bold;
            }
            ```
        - for
            ```sh
            @for $i from 1 to 10{
                @debug $i;
            }
            --> Với trường hợp này thì debug chỉ in ra các giá trị từ 1 đến 9

            - Muốn debug in ra các giá trị từ 1 đến 10 thì thay chữ to -> through 
            ```
        - Hàm map-get(tên map, key) dùng để lấy value của từng key
