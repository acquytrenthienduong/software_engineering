## JWT là gi?
JSON Web Token (JWT) là một chuẩn mở (RFC 7519) dùng để tạo ra các mã thông báo truy cập, cho phép hai bên trao đổi thông tin một cách an toàn dưới dạng JSON. JWT thường được sử dụng trong các hệ thống xác thực và phân quyền, đặc biệt là trong các ứng dụng web và API.

#### JWT có ba phần chính, được nối với nhau bằng dấu chấm (.):

Header: Chứa thông tin về thuật toán mã hóa (thường là HS256 hoặc RS256) và loại mã thông báo (thường là JWT).
Payload: Chứa các thông tin hoặc tuyên bố (claims) mà bạn muốn truyền tải. Các claims này có thể bao gồm thông tin người dùng, thời gian hết hạn token, quyền truy cập, v.v.
Signature: Được tạo ra bằng cách mã hóa header và payload với một khóa bí mật hoặc khóa công khai (tùy thuộc vào thuật toán), giúp đảm bảo tính toàn vẹn của mã thông báo.
Ví dụ: 
```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c```

Cách hoạt động: JWT được tạo ra và ký bởi server, sau đó gửi về client. Mỗi lần client yêu cầu, JWT sẽ được đính kèm vào header (thường là Authorization: Bearer <JWT>).

