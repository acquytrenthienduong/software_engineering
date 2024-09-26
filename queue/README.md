## Queue điển hình như Rabitmq

khá tương đồng với kafka, khác biệt lớn nhất là message sau khi được consume sẽ biến mất khỏi queue

#### Điểm Giống Nhau giữa RabitMQ vs Kafka
Phân tán và thông điệp bất đồng bộ: Cả Kafka và RabbitMQ đều là hệ thống xử lý thông điệp bất đồng bộ, giúp phân tán dữ liệu giữa các hệ thống, ứng dụng.
Chuyển phát tin nhắn: Cả hai hệ thống đều có khả năng gửi và nhận tin nhắn giữa các dịch vụ hoặc ứng dụng khác nhau.
Hỗ trợ nhiều ngôn ngữ: Cả Kafka và RabbitMQ đều hỗ trợ rất nhiều ngôn ngữ lập trình thông qua các thư viện client chính thức hoặc từ cộng đồng.
Khả năng mở rộng: Cả hai đều hỗ trợ khả năng mở rộng theo chiều ngang (scale-out) khi lượng dữ liệu hoặc tải công việc tăng cao.

chưa có cô hội phát triển rabitmq nên chưa tìm hiểu sâu