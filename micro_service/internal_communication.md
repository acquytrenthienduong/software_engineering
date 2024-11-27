## Lựa chọn phương pháp giao tiếp internal

Việc chọn giao tiếp giữa các service qua hàng đợi tin nhắn (queue) hoặc qua giao thức HTTP/gRPC phụ thuộc vào đặc điểm của hệ thống và yêu cầu cụ thể về hiệu suất, độ tin cậy, tính nhất quán và khả năng mở rộng. Dưới đây là so sánh giữa các phương thức này và các trường hợp nên sử dụng từng phương pháp.

Phương thức	                Đặc điểm	                    Khi nào nên sử dụng	                                    Hạn chế
Queue (Kafka, RabbitMQ)	    Bất đồng bộ, đảm bảo thứ tự	    Xử lý bất đồng bộ, yêu cầu độ tin cậy cao	            Phức tạp khi debug, độ trễ lớn hơn
HTTP (REST)	                Đồng bộ, phổ biến	            Giao tiếp nhanh và đơn giản giữa các service	        Không tối ưu cho tác vụ dài, mở rộng hạn chế
gRPC	                    Đồng bộ, hiệu năng cao	        Giao tiếp nhanh, dịch vụ nội bộ và yêu cầu streaming	Khó debug, tích hợp client phức tạp