## Các kỹ thuật thường sử dụng để tối ưu performance cho web
1. phía front-end:
    - sử dụng lazyloading - chỉ load các thành phần khi cần sử dụng
    - ném css, js, html để giảm kích thước tệp
    - sử dụng các kỹ thuật như bundling - tree-shaking để loại bỏ các đoạn code ko sử dụng
    - sử dụng CDN cho các file ảnh tĩnh (static file)
    - image sử dụng các định dạng file mới (AVIF, WebP - kích thước giảm 25 - 34% so với JPEG nhưng vẫn giữ nguyên chất lượng ảnh)
    - tối ưu hiệu suất = change detection onPush để chỉ render khi cần
    - với image mình sử dụng các định dạng như AVIF để giảm kích thước mà vẫn giư nguyên được chất lượng ảnh

2. phía back-end
    - Caching để tăng thời gian phản hồi
    - CDN
    - tối ưu query, sử dụng index cho dữ liệu thường truy cập
    - nén nội dung khi gửi
    - scaling nhiều pod để tăng xử lí tải

## Các nguyên tắc để giữ code sạch đẹp
    - tổ chức theo module hoặc feature
    - naming convertion thống nhất
    - tách nhỏ component
    - không viết css làm ảnh hưởng đến toàn bộ ứng dụng
    - sử dụng các chuẩn lint để format code js. ts
    - sử dụng ts để ép kiểu dữ liệu khi call api
    - sử dụng lazy loading cho các module chưa cần thiết