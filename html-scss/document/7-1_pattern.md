# 7 - 1 pattern
- Đây là kiến trúc tổ chức các file scss trong một dự án, và kiến trúc này chỉ phù hợp với các dự án _**lớn**_
- Cây thư mục 7 - 1
```
SCSS
 |___ abstracts
 |      |_____ mixins
 |      |
 |      |_____ variables
 |                  |_____colors
 |
 |___ base
 |      |_____base (common)
 |      |
 |      |_____reset
 |
 |___layout
 |      |_____header
 |      |
 |      |_____footer
 |      |
 |      |_____...
 |
 |___components
 |      |_____button
 |      |
 |      |_____toasts
 |      |
 |      |_____arlets
 |      |
 |      |_____forms
 |      |
 |      |_____modals
 |      |
 |      |_____...
 |
 |___pages
 |      |_____home
 |      |
 |      |_____contact
 |      |    
 |      |_____...
 |
 |___themes
 |      |_____light-theme
 |      |
 |      |_____dark-theme
 |      |
 |      |_____user-theme
 |      |
 |      |_____admin-theme
 |      |    
 |      |_____...
 |
 |___vendors
 |      |_____bootstrap
 |      |
 |      |_____jquery    
 |      |
 |      |_____naiveui
 |      |
 |      |_____slick-slider
 |      |    
 |      |_____...
 |
 |___main
 
```
