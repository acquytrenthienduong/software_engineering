## Micro Service là gì?
Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services.
Tách biệt các thành phần thành các service riêng biệt

#### Lợi ích

1. flexibility: các đội phát triển có thể làm việc trên từng micro service độc lập. ví dụ nhóm A làm serice A, nhóm B làm service B. => giúp các nhóm song song làm việc và giúp triển khai các tính năng mới nhanh hơn cũng như không gây xung đột với nhau

2. scalability: khi hệ thống có lượng request tăng đột biến liên    quan đến dịch vụ A hoặc B hoặc C => vận hành có thể mở rộng dịch vụ bằng cách thêm nhiều instance của service đó, mà không phải mở rộng toàn bộ hệ thống. tối ưu hoá tài nguyên và giảm chi phí

3. reliability & fault tolerance: nếu service A gặp sự cố, các dịch vụ B C D không bị gián đoạn. hệ thống không bị ảnh hưởng toàn bộ, đội vận hành có thể chỉ tập chung vào khôi phục service lỗi mà ko mất thời gian trace lỗi. giảm thiểu thời gian gián đoạn dịch vụ và rủi ro triển khai


#### Tuy nhiên vấn đề mà kiến trúc này gặp phải cũng nhiều

1. inter-service communication: giao tiếp nội bộ giữa các service. cần thiết kế giao thức giao tiếp: (REST, gRPC, message queue ...) hiệu quả và đảm bảo sử lý retry nếu có vấn đề về internet

2. distributed data management: bởi vì dữ liệu được phân tán trên nhiều service ví dụ như product Service có thông tin sản phẩm, order Service có dữ liệu đơn hàng. cần đảm bảo tính nhất quán của dữ liệu khi cập nhật. Giả sử khi sản phẩm hết hàng cần đảm bảo product Service được cập nhật chính xác trước khi orderService được thực hiện. cơ chế đồng thuận về transaction là một trong những thách thức lớn: ví dụ khi customer thực hiện thanh toán và một số ưu đãi khác cho một đơn hàng, họ có thể sử dụng dịch vụ thanh toán của bên thứ 3, hệ thống của chúng ta cũng cần thông báo cho một bên thứ 3 khác nữa, bên cạnh việc cập nhật dữ liệu trong DB nội bộ của chúng ta, vậy lúc này quản lý transaction sẽ phức tạp hơn. lần gần đây nhất gặp phải bug liên quan vấn đề này – chúng tôi đã làm mất của khách hàng 27K usd tiền phạt và phải free vĩnh viễn lisence phần mềm cho 02 khách hàng  b2b khác (của khách hàng chúng tôi). phần mềm của chúng tôi đã charge khách hàng nhiều lần qua thẻ trong khi họ chỉ đến dùng dịch vụ có 1 lần. lỗi liên quan tới xử lý transaction ko tốt. [đọc thêm : https://www.geeksforgeeks.org/what-is-a-distributed-transaction/]

3. monitoring & observability: bởi vì chạy nhiều micro service trên nhiều máy chủ riêng biệt nên việc theo dõi hoạt động và phát hiện sự cố trở nên phức tạp. cần nhiều công cụ chuyên dụng để có thể đảm bảo nhanh chóng phát hiện và sử lí lỗi, ví dụ: (ví dụ prometheus, grafana, hoặc ELK stack). hệ thống cũng cần có cơ chế ghi nhận lại logs cho người dùng để lại

4. configuration & deployment management: mỗi con service cần được cấu hình và triển khai độc lập trên máy chủ hoặc máy ảo khác nhau. ví dụ sử dụng các công cụ như kubernetes hay docker swarm để quản lý quá trình triển khai, và các công cụ CI/CD để tự động hóa việc triển khai và cập nhật

5. security: 
    lưu lại session
    sử dụng JWT để uỷ quyền
    SSO
    các cơ chế acccess controll design: RBAC, ABAC

ví dụ 
1. kiểm tra xem sản phẩm có sẵn trong kho không. 
2. xử lý thanh toán từ người dùng. 
3. cập nhật kho hàng để trừ số lượng đã mua. 
4. gửi thông báo xác nhận đơn hàng đến khách hàng. 
việc thực hiện tất cả các bước này một cách đồng bộ (synchronous) sẽ làm chậm hệ thống và dễ gặp phải vấn đề khi có nhiều yêu cầu đồng thời

để giải quyết vấn đề này, ta có thể sử dụng message queue (ví dụ: RabbitMQ, Apache Kafka, Amazon SQS) để xử lý các tác vụ không đồng bộ

một kiến trúc có thể sẽ phải hybrid với nhiều loại kiến trúc khác để build lên một system architecture chứ ko bao giờ 1 thứ là đủ