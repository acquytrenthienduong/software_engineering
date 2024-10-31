# DOM là gì?
DOM (Document Object Model) là một giao diện lập trình cho các tài liệu HTML và XML, đóng vai trò quan trọng trong lập trình front-end. Khi trình duyệt tải một trang web, nó tạo ra một cấu trúc cây DOM dựa trên cấu trúc HTML của trang. Cây DOM này cho phép các lập trình viên truy cập và thao tác với nội dung, cấu trúc và kiểu dáng của trang web bằng cách sử dụng JavaScript.

## DOM Manipulation
Ý nghĩa: DOM Manipulation là quá trình truy cập và thay đổi các phần tử, cấu trúc, hoặc nội dung của cây DOM thông qua JavaScript.

Các thao tác phổ biến:
Thay đổi nội dung của phần tử (ví dụ, cập nhật văn bản của một thẻ <p>).
Thêm hoặc xóa các phần tử trong trang web (ví dụ, tạo một danh sách mới hoặc loại bỏ một mục từ danh sách).
Thay đổi thuộc tính hoặc kiểu dáng của phần tử (ví dụ, thay đổi màu nền hoặc thay đổi id).
```
// Thay đổi nội dung của một thẻ có id là "myElement"
document.getElementById("myElement").innerText = "Nội dung mới";

// Tạo một phần tử mới và thêm vào DOM
let newDiv = document.createElement("div");
newDiv.innerText = "Đây là một phần tử mới";
document.body.appendChild(newDiv);
```

Nhược điểm: Thao tác DOM có thể tốn tài nguyên và gây chậm nếu số lượng thao tác lớn, do trình duyệt phải liên tục cập nhật giao diện người dùng.

## Shadow DOM
Ý nghĩa: Shadow DOM là một phần của Web Components và cho phép tạo ra một DOM "bóng" riêng biệt, nằm tách biệt khỏi cây DOM chính của trang web.

Mục đích: Tạo không gian riêng cho các phần tử DOM, ngăn chặn các xung đột về CSS và JavaScript, giúp mỗi thành phần hoạt động độc lập và dễ kiểm soát hơn.

Cách hoạt động: Khi sử dụng Shadow DOM, một phần tử có thể có "shadow root" (gốc bóng), trong đó chứa DOM riêng biệt của nó. CSS và JavaScript bên ngoài không thể ảnh hưởng đến shadow root trừ khi được phép.

## Virtual DOM
Ý nghĩa: Virtual DOM là một kỹ thuật được dùng trong các thư viện như React để cải thiện hiệu suất cập nhật DOM.

Cách hoạt động: Virtual DOM là một bản sao của cây DOM thực tế nhưng tồn tại dưới dạng "ảo". Khi có thay đổi, thư viện sẽ cập nhật Virtual DOM trước và tính toán sự khác biệt (diffing) giữa bản DOM ảo và DOM thật. Sau đó, nó chỉ cập nhật những phần thay đổi trong DOM thật, không cần render lại toàn bộ trang.

Lợi ích: Giảm thiểu số lượng thao tác trên DOM thật, tiết kiệm thời gian và tài nguyên, tăng hiệu suất.

Ưu điểm: Virtual DOM giúp cập nhật giao diện nhanh chóng và mượt mà, đặc biệt là khi có nhiều thay đổi đồng thời trên trang.