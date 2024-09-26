## Kafka là gì?

Apache Kafka là một nền tảng truyền tải sự kiện (event streaming) phân tán, có khả năng xử lý lượng lớn dữ liệu theo thời gian thực với hiệu suất cao và độ tin cậy cao. Ban đầu được phát triển bởi LinkedIn và sau đó được mã nguồn mở dưới sự bảo trợ của Apache Software Foundation, Kafka đã trở thành một công nghệ cốt lõi trong việc xây dựng các pipeline dữ liệu thời gian thực và các ứng dụng xử lý dòng dữ liệu. Kiến trúc mạnh mẽ và các tính năng linh hoạt của Kafka làm cho nó phù hợp với nhiều trường hợp sử dụng, từ tổng hợp log và phân tích thời gian thực đến nguồn sự kiện và xử lý luồng dữ liệu.

## Cách thành phần chính tạo nên 1 cụm cluster Kafka

1. Broker
    - A broker is a single Kafka server
    - 1 cluster kafka nghĩa là 1 cụm gồm nhiều broker
2. Consumer, Consumer Group
    - Consumer là phần tiêu thụ, xử lí message trong topic
    - Consumer Group là nhóm các consumer có cùng label, nhiều consumer trong 1 group sẽ tăng tốc độ tiêu thụ message, trường hợp lí tưởng nhất là N partition - N consumer trong consumer group
3. Producer
    - Producer là phần đẩy message vào trong kafka
4. Topic, Partitions
    - Topics classify messages in Kafka.  A topic is roughly analogous to a database table or folder.  Topics are further subdivided into several partitions as described above.
    - Partitions là phân chia nhỏ hơn bên trong 1 topic, ví dụ topic A có 2 partitions (partitions 1 & 2),
    - Khi một topic được chia thành nhiều partition, Kafka có thể phân phối các partition này qua nhiều broker khác nhau. Điều này cho phép nhiều consumer có thể đọc dữ liệu từ các partition khác nhau cùng một lúc, giúp tăng tốc độ xử lý và khả năng chịu tải cao hơn khi dữ liệu lớn.

ví dụ: 
    Giả sử bạn có một topic chứa log dữ liệu từ nhiều thiết bị IoT gửi về. Nếu topic này chỉ có một partition, thì chỉ có một consumer có thể đọc và xử lý dữ liệu. Khi lượng thiết bị tăng lên và số lượng tin nhắn quá nhiều, consumer sẽ không thể xử lý kịp thời.

    Nếu topic được chia thành 4 partitions, thì 4 consumer có thể đọc dữ liệu từ 4 partition khác nhau cùng một lúc. Mỗi consumer sẽ xử lý một phần dữ liệu, giúp giảm thời gian xử lý và tăng tốc độ hệ thống tổng thể. Hơn nữa, nếu lượng dữ liệu tiếp tục tăng, bạn có thể dễ dàng thêm nhiều consumer hơn mà không làm gián đoạn hệ thống.
5. Zookeeper:
    - Quản lý metadata của Kafka, bao gồm thông tin về các broker, topic, partition, và replica.
    - Điều phối leader election cho các partition trong cluster.
    - Quản lý thông tin về trạng thái của các broker (broker nào đang hoạt động, broker nào bị tắt).
    - Giám sát các thay đổi trong cấu trúc của Kafka và đảm bảo tính đồng nhất trên toàn hệ thống.
6. Schema registry
    - Schema Registry lưu trữ các lược đồ cho các thông điệp được gửi qua Kafka. Producer và consumer có thể ghi và đọc dữ liệu theo các lược đồ đã được đăng ký.
    - Mỗi topic có thể có một hoặc nhiều schema khác nhau và Schema Registry giúp quản lý chúng một cách hiệu quả.
