Chuẩn bị Kafka Cluster: Đảm bảo Kafka cluster của bạn đã được cấu hình và khởi động. Bạn cần một hoặc nhiều broker đang chạy.

kafka-producer-perf-test.sh --topic <tên_topic> --num-records <số_lượng_bản_ghi> --record-size <kích_thước_bản_ghi> --throughput <giới_hạn_throughput> --producer-props bootstrap.servers=<địa_chỉ_broker>

kafka-consumer-perf-test.sh --topic <tên_topic> --messages <số_lượng_bản_ghi> --bootstrap-server <địa_chỉ_broker>

directory 

cd kafka/bin

./kafka-producer-perf-test.sh --help
./kafka-consumer-perf-test.sh --help

# Lần 1
## Producer
kafka-producer-perf-test.sh --topic my-topic --num-records 1000000 --record-size 1024 --throughput -1 --producer-props bootstrap.servers=10.60.68.114:9094
59716 records sent, 11924.1 records/sec (11.64 MB/sec), 1753.4 ms avg latency, 2334.0 ms max latency.
70920 records sent, 14184.0 records/sec (13.85 MB/sec), 1924.7 ms avg latency, 2406.0 ms max latency.
115185 records sent, 23027.8 records/sec (22.49 MB/sec), 1479.6 ms avg latency, 2497.0 ms max latency.
113010 records sent, 22602.0 records/sec (22.07 MB/sec), 1331.2 ms avg latency, 1675.0 ms max latency.
141024 records sent, 28204.8 records/sec (27.54 MB/sec), 213.5 ms avg latency, 997.0 ms max latency.
139214 records sent, 27842.8 records/sec (27.19 MB/sec), 10.4 ms avg latency, 140.0 ms max latency.
153820 records sent, 30764.0 records/sec (30.04 MB/sec), 29.0 ms avg latency, 196.0 ms max latency.
110281 records sent, 22056.2 records/sec (21.54 MB/sec), 2.7 ms avg latency, 43.0 ms max latency.
1000000 records sent, 22791.503328 records/sec (22.26 MB/sec), 616.57 ms avg latency, 2497.00 ms max latency, 106 ms 50th, 2162 ms 95th, 2374 ms 99th, 2469 ms 99.9th.

Throughput (records/sec và MB/sec):

Trung bình: 22791.50 records/sec (khoảng 22.26 MB/sec).
Throughput này là tốc độ gửi trung bình của producer, cho thấy Kafka có thể ghi dữ liệu vào topic với tốc độ khá ổn định.
Latency (Độ trễ):

Avg latency: 616.57 ms là độ trễ trung bình từ lúc gửi đến lúc message được Kafka xử lý.
Max latency: 2497 ms là độ trễ cao nhất gặp phải trong quá trình thử nghiệm.
Các mốc phần trăm (percentiles):
50th percentile: 106 ms — 50% số message có độ trễ dưới 106 ms.
95th percentile: 2162 ms — 95% số message có độ trễ dưới 2162 ms.
99th percentile: 2374 ms — 99% số message có độ trễ dưới 2374 ms.
99.9th percentile: 2469 ms — 99.9% số message có độ trễ dưới 2469 ms.
Kết luận cho Producer Benchmark:

Hệ thống Kafka của bạn có khả năng xử lý throughput khá tốt (~22 MB/s).
Độ trễ trung bình và độ trễ cho phân vị thấp (50th và 95th) tương đối ổn. Tuy nhiên, có một số điểm ghi nhận độ trễ cao, với max latency lên đến 2497 ms, có thể do tải đột biến hoặc cấu hình hệ thống cần tối ưu hơn.

## Consumer
kafka-consumer-perf-test.sh --topic my-topic --messages 1000000 --bootstrap-server 10.60.68.114:9094
2024-11-14 04:18:01:018, 2024-11-14 04:18:08:731, 976.5631, 126.6126, 1000044, 129656.9428, 3313, 4400, 221.9462, 227282.7273

Kết luận cho Consumer Benchmark:

Throughput tiêu thụ rất cao và ổn định (khoảng 129,656 records/sec), nhưng độ trễ tiêu thụ trung bình (976.56 ms) và độ trễ cao nhất (4400 ms) có vẻ cao hơn mức tối ưu.
Độ trễ cao có thể giảm được qua việc điều chỉnh fetch.min.bytes, fetch.max.wait.ms, và các cấu hình consumer khác.


# Lần 2

## Producer
kafka-producer-perf-test.sh --topic test-topic --num-records 1000000 --record-size 1024 --throughput -1 --producer-props bootstrap.servers=localhost:9092 linger.ms=5 batch.size=16384 compression.type=lz4 acks=all

[2024-11-14 07:14:09,478] WARN [Producer clientId=perf-producer-client] Error while fetching metadata with correlation id 1 : {test-topic=UNKNOWN_TOPIC_OR_PARTITION} (org.apache.kafka.clients.NetworkClient)
281521 records sent, 56304.2 records/sec (54.98 MB/sec), 399.2 ms avg latency, 779.0 ms max latency.
442659 records sent, 88531.8 records/sec (86.46 MB/sec), 39.5 ms avg latency, 356.0 ms max latency.
1000000 records sent, 78939.059046 records/sec (77.09 MB/sec), 130.81 ms avg latency, 779.00 ms max latency, 1 ms 50th, 597 ms 95th, 760 ms 99th, 773 ms 99.9th.

Throughput và Latency:

Số lượng bản ghi: 1,000,000 bản ghi đã được gửi, với kích thước mỗi bản ghi là 1024 bytes (1 KB).
Throughput: Đạt 77.09 MB/giây và 78,939.06 bản ghi/giây. Tốc độ này cao, thể hiện rằng producer của bạn có khả năng đẩy dữ liệu lớn vào Kafka mà không bị nghẽn.
Độ trễ trung bình: 130.81 ms là độ trễ trung bình giữa lúc producer gửi bản ghi và lúc nhận xác nhận từ broker. Độ trễ trung bình thấp giúp giữ hiệu suất cao, tuy nhiên giá trị này có thể dao động tùy vào cấu hình mạng và cấu hình của Kafka cluster.
Độ trễ tối đa: 779 ms là độ trễ tối đa ghi nhận, và có một số mức phân vị khác như 95th percentile (597 ms) và 99th percentile (760 ms), thể hiện độ trễ của phần lớn bản ghi trong khoảng giới hạn này.
Cấu hình tối ưu hóa:

linger.ms: Được đặt là 5 ms, cho phép producer đợi tối đa 5 ms để nhóm nhiều bản ghi trong một batch trước khi gửi, giúp tăng hiệu suất khi load dữ liệu.
batch.size: 16,384 bytes (16 KB), kích thước tối đa của mỗi batch. Batch lớn hơn có thể giảm số lượng request nhưng cũng có thể làm tăng độ trễ.
compression.type=lz4: Sử dụng lz4 để nén dữ liệu, giúp giảm lượng dữ liệu truyền tải qua mạng, đặc biệt hữu ích khi xử lý các message lớn hoặc có cấu trúc dữ liệu lặp lại.
acks=all: Đảm bảo rằng tất cả các bản sao cần ghi vào log trước khi broker gửi xác nhận cho producer, giúp tăng độ tin cậy nhưng có thể làm tăng độ trễ.

## Consumer
kafka-consumer-perf-test.sh --topic test-topic --messages 1000000 --bootstrap-server localhost:9092 --threads 4 --group perf-test-group
2024-11-14 07:19:54:877, 2024-11-14 07:20:04:805, 976.5625, 98.3645, 1000000, 100725.2216, 3399, 6529, 149.5731, 153162.8121
Dựa trên các kết quả benchmark Kafka consumer của bạn, đây là ý nghĩa của từng thông số và một số gợi ý:

Thông lượng (Throughput - MB/sec và nMsg/sec):

Data Consumed in MB: 976.5625 MB là tổng lượng dữ liệu mà consumer đã tiêu thụ từ Kafka trong khoảng thời gian benchmark.
MB/sec: 98.3645 MB/giây, thể hiện tốc độ tiêu thụ dữ liệu. Đây là một chỉ số quan trọng để đánh giá khả năng xử lý của consumer.
nMsg/sec: 100725.2216 messages/giây, thể hiện số lượng tin nhắn mà consumer xử lý mỗi giây. Tốc độ này cho thấy khả năng xử lý tin nhắn lớn của consumer.
Thời gian Rebalance (rebalance.time.ms):

3399 ms: Đây là thời gian mà consumer mất để thực hiện cân bằng lại (rebalance) khi có sự thay đổi (ví dụ khi một consumer trong nhóm ngừng hoạt động). Giữ thời gian này ở mức thấp giúp duy trì tính sẵn sàng của hệ thống.
Thời gian Fetch (fetch.time.ms):

6529 ms: Tổng thời gian mà consumer dành để lấy dữ liệu từ broker Kafka. Thời gian fetch ngắn hơn thường tốt hơn vì nó giảm độ trễ giữa broker và consumer.
Thông lượng Fetch (fetch.MB.sec và fetch.nMsg.sec):

fetch.MB.sec: 149.5731 MB/giây, cho thấy tốc độ lấy dữ liệu từ broker.
fetch.nMsg.sec: 153162.8121 messages/giây, chỉ ra tốc độ lấy tin nhắn. Những thông số này cho thấy consumer của bạn có khả năng xử lý thông lượng dữ liệu cao.
Một số gợi ý cải thiện
Thông lượng: Nếu muốn tăng thông lượng, bạn có thể thử điều chỉnh kích thước của fetch.min.bytes và fetch.max.wait.ms trong cấu hình consumer để kiểm soát lượng dữ liệu mà consumer lấy mỗi lần truy vấn broker.
Thời gian Rebalance: Tăng session.timeout.ms trong consumer.properties có thể giúp giảm tình trạng rebalance không cần thiết, cải thiện độ ổn định cho consumer.
Nhìn chung, kết quả benchmark của bạn là tốt và cho thấy Kafka consumer có khả năng xử lý dữ liệu với thông lượng cao và độ trễ hợp lý, đủ để đáp ứng các yêu cầu tải cao trong môi trường sản xuất.