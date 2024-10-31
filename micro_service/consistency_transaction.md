## Transaction trong bối cảnh microservices

Trong hệ thống microservices, một transaction là một quá trình hoàn tất nhiều hành động (thường được thực hiện bởi nhiều dịch vụ độc lập) như:

Tạo đơn hàng.
Thanh toán đơn hàng.
Cập nhật kho hàng.

Vấn đề ở đây là các dịch vụ hoạt động độc lập, thường trên các cơ sở dữ liệu khác nhau. Nếu một hành động trong transaction bị lỗi, các hành động khác đã hoàn thành trước đó cần được hoàn tác để hệ thống không rơi vào tình trạng dữ liệu không nhất quán. Trong microservices, việc xử lý giao dịch phân tán gặp nhiều thách thức, vì không có transaction manager tập trung để quản lý tất cả các dịch vụ.

#### Nhưng trước khi đến với distributed transaction, thử xem qua một vài crazy idea xem có gì hay ho.

1. Sử dụng chung database
    Service A   |   Service B   | Service C
                Share DB
===> không hợp lí, vì tách thành micro service để tối ưu tài nguyên cho từng service, nếu giờ service A tăng tải và cần mở rộng thì vẫn phải mở rộng cả DB chung này
    
2. Sử dụng database riêng nhưng replicate sang nhau
    Service A   |   Service B   | Service C
    DB A        |   DB B        | DB C
Với cách xử lý này, một vấn đề dễ nhận thấy nhất là data giữa các node có thể không consistence với nhau tại một khoảng thời gian nhất định - eventual consistence.

Tốt nhất nên giữ nguyên như ban đầu - each service has it own database và sử dụng distributed transaction để xử lý dual write problem.

#### Tiêu chí lựa chọn queue
Tiêu chí	        Kafka	                                RabbitMQ
Cách tiếp cận	    Event streaming	                        Message queuing
Khả năng lưu trữ	Dữ liệu lưu trữ dài hạn	                Xử lý thông điệp và xóa ngay sau xử lý
Thứ tự sự kiện	    Đảm bảo thứ tự trong cùng partition	    Không đảm bảo thứ tự trong queue
Thông lượng cao	    Xử lý hàng triệu sự kiện/giây	        Tốt nhưng thấp hơn Kafka
Độ trễ	            Cao hơn RabbitMQ	                    Độ trễ thấp
Mẫu định tuyến	    Đơn giản, chủ yếu dựa trên partition	Hỗ trợ nhiều mẫu định tuyến phức tạp
Tính dễ sử dụng	    Cấu hình phức tạp hơn, yêu cầu tuning	Dễ cấu hình, thiết lập nhanh

1. Chọn Kafka nếu cần một giải pháp mạnh mẽ để xử lý lượng dữ liệu lớn, phân tích thời gian thực, hoặc yêu cầu lưu trữ sự kiện lâu dài. Kafka phù hợp hơn cho các hệ thống event streaming hoặc microservices dựa trên sự kiện.

2. Chọn RabbitMQ nếu ứng dụng của bạn yêu cầu xử lý tin nhắn có độ trễ thấp và cần các mẫu định tuyến phức tạp, hoặc khi cần một hệ thống message queuing truyền thống với khả năng xử lý tin nhắn theo hàng đợi.