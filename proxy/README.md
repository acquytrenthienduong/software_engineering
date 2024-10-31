## Proxy server là gì?
Trong mạng máy tính, proxy server là một server đóng vai trò làm trung gian giữa client và server. Do đó, proxy server hoạt động thay mặt cho client khi request một tài nguyên, và có khả năng che dấu nguồn gốc thực sự của request đó.

## Tại sao lại cần proxy server?
Thay vì kết nối trực tiếp tới server, client gửi request đến proxy để đánh giá và thực hiện những request đó. Điều này giúp chúng ta đơn giản hóa hoặc kiểm soát mức độ phức tạp của các request, hoặc cung cấp các cơ chế như load balancing (đại khái là một cơ chế để cân bằng khối lượng công việc của nhiều server), quyền riêng tư hay bảo mật. Proxy cũng được tạo ra để thêm cấu trúc và đóng gói cho các hệ thống phân tán.

## Forward proxy
Forward proxy (hay còn gọi là open proxy) là một proxy server có thể được truy cập bởi bất kì người dùng nào

Có hai loại open proxy:

Anonymous proxy (proxy ẩn danh) – Loại proxy này hoạt động như là một máy chủ nhưng không tiết lộ địa chỉ IP gốc của client. Mặc dù loại proxy này có thể bị phát hiện một cách dễ dàng, nhưng nó vẫn mang lại lợi ích khi có thể che dấu địa chỉ IP.

Trаnspаrent proxy (proxy minh bạch) – Ngược lại với Anonymous proxy, loại proxy này hoạt động như là một proxy và chúng forward request bằng các HTTP header (ví dụ như X-Forwarded-For). Nhờ có những HTTP header này mà địa chỉ IP gốc có thể được tìm thấy. Lợi ích chính khi dùng loại proxy này là khả năng cache một website.

## Reverse proxy
Reverse proxy là một proxy server mà khi đứng trước client, chúng hoạt động giống như những server bình thường. Reverse proxy chuyển tiếp request đến một hoặc nhiều server thật, kết quả sau đó trả về cho client như thể là chúng được trả về từ reverse proxy, khiến cho client không biết về những server thật nói trên. Reverse proxy được cài đặt trong một private network của một hoặc nhiều server, và tất cả lưu lượng truy cập đều phải đi qua proxy này.

Thông thường, những server sẽ sử dụng cơ chế reverse proxy này để bảo vệ các ứng dụng có khả năng xử lý HTTP yếu kém. Ví dụ như khả năng xử lý cực lớn các request, những hạn chế về xử lý sự đa dạng của các loại request (các dạng request có thể kể đến như: HTTP(S) 1.x, HTTP(S) 2.x, ...) hay khả năng chuyển đổi HTTPS thành HTTP, cache request, xử lý dữ liệu của cookies/session, chia một request thành nhiều request nhỏ hơn rồi tổng hợp lại các response, ...


Khác biệt lớn nhất giữa hai loại proxy này là forward proxy được sử dụng bởi client (ví dụ như trình duyệt). Trong khi đó, reverse proxy được sử dụng bởi server (ví dụ như web server). Forward proxy có thể nằm trong một mạng nội bộ cùng với client hoặc cũng có thể công khai trên Internet.

Hay nói một cách dễ hiểu hơn, forward proxy đại diện cho client, còn reverse proxy đại diện cho server.

các ví dụ tiêu biểu như: Ngix, HAproxy