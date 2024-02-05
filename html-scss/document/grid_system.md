# Grid system
### Bảng breakpoint tiêu chuẩn
|Breakpoint             |	Class infix |	Dimensions|
|:----------------------|:--------------|:------------|
|Extra small            |	None        |	<576px    |
|Small                  |	sm          |	≥576px    |
|Medium                 |	md          |	≥768px    |
|Large                  |	lg          |	≥992px    |
|Extra large            |	xl          |	≥1200px   |
|Extra extra large      |	xxl         |	≥1400px   |

### Bảng breakpoint trong components
|                 |Extra small(<576px) |  Small(≥576px)   |  Medium(≥768px)  |  Large(≥992px)   |  X-Large(≥1200px)  |  XX-Large(≥1400px)  |
|:----------------|:-------------------|:-----------------|:-----------------|:-----------------|:-------------------|:--------------------|
|.container       |      100%          |       540px      |    	720px	     |      960px       |	    1140px       |	        1320px     |
|.container-sm	  |      100%	       |       540px      | 	720px        |  	960px       |   	1140px       |	        1320px     |
|.container-md	  |      100%	       |       100%	      |     720px	     |      960px       |       1140px	     |          1320px     |
|.container-lg	  |      100%	       |       100%	      |     100%	     |      960px       |       1140px	     |          1320px     |
|.container-xl	  |      100%	       |       100%	      |     100%	     |      100%	    |       1140px	     |          1320px     |
|.container-xxl	  |      100%	       |       100%	      |     100%	     |      100%	    |       100%	     |          1320px     |
|.container-fluid |      100%	       |       100%	      |     100%	     |      100%	    |       100%	     |          100%       |

### Biến scss breakpoint
```sh
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

### Biến scss breakpoint trong container
```sh
$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
);
```

- Với class row thì sẽ tạo từ 1 - 12
- Với class row-cols thì class từ 1-6
- Với class offset thì class từ 0 - 11
- g-*, gx-*, gy-*
- Ta có thể thay đổi giá trị của một biến trong một file partial scss từ một file thông qua cách sau:
    ```sh
    B1: Thêm !default vào sau biến mà bạn cho phép file khác sửa
        $grid-gutter-width: 30px !default;
    -> Ở đây biến  $grid-gutter-width mặc định là 30px nếu file khác khum muốn sửa giá trị của biến
    B2: Dùng cú pháp sau để sửa 
        @use './grid' with ($grid-gutter-width: 20px);
    ```