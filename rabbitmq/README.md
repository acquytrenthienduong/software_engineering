# RabbitMQ as a Service (RaaS) - Triển khai trên Bare-metal/VMs với Container

## 1. Giới thiệu
RabbitMQ as a Service (RaaS) là dịch vụ cung cấp khả năng khởi tạo, quản lý và giám sát các RabbitMQ instances trên nền tảng VM, sử dụng container để đơn giản hóa việc triển khai và mở rộng.

Dịch vụ hỗ trợ ba chế độ triển khai:
- **Single Node**: RabbitMQ chạy trên một VM riêng.
- **Cluster Mode**: RabbitMQ chạy trên nhiều VM với khả năng mở rộng.
- **HA Mode**: Hỗ trợ High Availability với Quorum Queues.

## 2. Kiến trúc hệ thống
### 2.1. Mô hình triển khai
```
┌──────────────────────┐
│      End User        │
└────────▲────────────┘
         │
┌────────┴───────────┐
│ API Gateway (Kong) │
│ Load Balancer      │
└────────┬───────────┘
         │
┌────────▼───────────┐
│ Service Manager    │
│ Quản lý Instances │
└────────┬───────────┘
         │
┌────────▼───────────┐
│ RabbitMQ Cluster   │
│ (Single/HA Mode)   │
└────────┬───────────┘
         │
┌────────▼───────────┐
│ Monitoring & Logs  │
└────────────────────┘
```

### 2.2. Thành phần chính
- **Load Balancer (HAProxy/Nginx)**: Cân bằng tải giữa các RabbitMQ instances.
- **API Gateway (Kong, Traefik)**: Quản lý request từ user.
- **Service Manager**: API Backend để tạo và quản lý instances.
- **RabbitMQ Cluster**: Chạy trên các VM với container.
- **Monitoring (Prometheus, Grafana)**: Giám sát hiệu suất.
- **Logging (Loki, ELK Stack)**: Ghi log các sự kiện quan trọng.

## 3. Các Thành Phần Trong RabbitMQ Và Nhiệm Vụ
| **Thành phần** | **Mô tả** |
|----------------|----------|
| **Producer** | Gửi message đến Exchange. |
| **Exchange** | Nhận message từ Producer, định tuyến message đến Queue. |
| **Queue** | Lưu trữ message cho đến khi Consumer nhận. |
| **Binding** | Kết nối Exchange với Queue, quyết định hướng đi của message. |
| **Routing Key** | Chỉ định message sẽ được gửi đến Queue nào. |
| **Consumer** | Nhận và xử lý message từ Queue. |
| **Acknowledgment (ACK)** | Đảm bảo message chỉ bị xóa khi Consumer xử lý xong. |
| **Dead Letter Exchange (DLX)** | Lưu trữ message bị lỗi hoặc timeout. |
| **Federation & Shovel** | Kết nối nhiều RabbitMQ Cluster, cho phép chuyển message giữa các cluster. |
| **Authentication & Authorization** | Xác thực và phân quyền người dùng, hỗ trợ LDAP, OAuth2, JWT. |

## 4. Phân Loại Built-in (Nội Bộ) và External (Bên Ngoài Kết Nối)
| **Thành phần** | **Built-in (Nội bộ trong RabbitMQ Cluster)** | **External (Bên ngoài kết nối đến RabbitMQ)** |
|---------------|--------------------------------------|--------------------------------------|
| **Erlang Cluster** | ✅ RabbitMQ tự động quản lý node-to-node communication. | ❌ Không kết nối từ bên ngoài. |
| **Quorum Queues & Mirrored Queues** | ✅ Được RabbitMQ quản lý HA giữa các node. | ❌ Không thể truy cập từ bên ngoài. |
| **Internal Node-to-Node Communication** | ✅ Sử dụng Erlang Distribution (port 25672). | ❌ Không thể kết nối từ bên ngoài. |
| **Producer & Consumer** | ❌ Không phải thành phần nội bộ. | ✅ Ứng dụng kết nối vào RabbitMQ qua AMQP (port 5672). |
| **Load Balancer (HAProxy, Nginx, Traefik)** | ❌ Không phải thành phần nội bộ. | ✅ Cân bằng tải kết nối từ bên ngoài vào RabbitMQ. |
| **Federation & Shovel** | ❌ Không phải thành phần nội bộ. | ✅ Kết nối RabbitMQ giữa nhiều cluster (multi-datacenter). |
| **Monitoring (Prometheus, Grafana, ELK, Loki)** | ❌ Không có sẵn trong RabbitMQ. | ✅ Kết nối từ bên ngoài để giám sát queue, message rate. |
| **Authentication (LDAP, OAuth2, JWT)** | ❌ Không phải thành phần nội bộ. | ✅ Hỗ trợ kết nối từ dịch vụ xác thực bên ngoài. |

## 5. Kết luận
RabbitMQ as a Service trên Bare-metal/VMs cung cấp giải pháp linh hoạt, hỗ trợ HA và Cluster Mode, dễ dàng quản lý qua API, có khả năng giám sát và bảo mật cao.

### 🚀 **Bước tiếp theo**
1. Hoàn thiện API quản lý RabbitMQ.
2. Tích hợp CI/CD để tự động triển khai trên VM.
3. Kiểm tra hiệu suất và tối ưu hóa hệ thống.




PORT 5672 AMQP (Messaging) Luôn mở
PORT 15672 AMQP RabbitMQ Web UI, API
PORT 5672 AMQP (Messaging) Luôn mở

# RabbitMQ Data Flow Diagrams

## 1️⃣ Direct Queue (Producer → Queue → Consumer)
```
[ Producer ]  --->  [ Queue ]  --->  [ Consumer ]
```
- **Producer** gửi message trực tiếp vào **Queue**.
- **Consumer** đọc message từ **Queue**.
- **Không có Exchange**, chỉ dùng khi có **1 Queue duy nhất**.

---

## 2️⃣ Direct Exchange (Producer → Exchange → Queue → Consumer)
```
[ Producer ]  --->  [ Direct Exchange ]  --->  [ Queue ]  --->  [ Consumer ]
                                    |  --->  [ Queue ]  --->  [ Consumer ]
```
- **Producer gửi message vào Exchange**.
- **Exchange định tuyến message đến Queue dựa trên Routing Key**.
- **Consumer nhận message từ Queue khớp với Routing Key**.
- **Thích hợp cho hệ thống Logging, Routing**.

---

## 3️⃣ Fanout Exchange (Broadcast Messages)
```
[ Producer ]  --->  [ Fanout Exchange ]  --->  [ Queue 1 ]  --->  [ Consumer 1 ]
                                       |  --->  [ Queue 2 ]  --->  [ Consumer 2 ]
                                       |  --->  [ Queue 3 ]  --->  [ Consumer 3 ]
```
- **Producer gửi message vào Exchange**.
- **Exchange gửi message đến tất cả Queue đã bind**.
- **Tất cả Consumers đều nhận được message**.
- **Thích hợp cho hệ thống thông báo, event broadcasting**.

---

## 4️⃣ Topic Exchange (Pattern-based Routing)
```
[ Producer ]  --->  [ Topic Exchange ]  --->  [ Queue 1 (logs.#) ]  --->  [ Consumer 1 ]
                                    |  --->  [ Queue 2 (logs.error) ]  --->  [ Consumer 2 ]
                                    |  --->  [ Queue 3 (logs.*.critical) ]  --->  [ Consumer 3 ]
```
- **Producer gửi message với Routing Key** (VD: `logs.system.error`).
- **Exchange định tuyến message dựa trên pattern**:
  - `logs.#` nhận tất cả logs.
  - `logs.error` nhận chính xác logs lỗi.
  - `logs.*.critical` nhận logs dạng `logs.app.critical`.
- **Thích hợp cho microservices, logging systems**.

---

## 5️⃣ Headers Exchange (Routing by Metadata)
```
[ Producer ]  --->  [ Headers Exchange ]  --->  [ Queue 1 (x-match: any) ]  --->  [ Consumer 1 ]
                                        |  --->  [ Queue 2 (x-match: all) ]  --->  [ Consumer 2 ]
```
- **Producer gửi message với metadata (headers)**.
- **Exchange định tuyến message dựa trên giá trị headers**.
- **Thích hợp cho hệ thống yêu cầu routing linh hoạt**.

---

## 6️⃣ RabbitMQ Stream (High-performance Data Streaming)
```
[ Producer ]  --->  [ RabbitMQ Stream ]  --->  [ Consumer 1 (replays all) ]
                                          --->  [ Consumer 2 (real-time) ]
```
- **Producer gửi dữ liệu vào Stream (qua cổng 5552, không dùng AMQP 5672)**.
- **Consumer có thể đọc lại từ đầu hoặc nhận dữ liệu theo thời gian thực**.
- **Thích hợp cho xử lý Big Data, Event Sourcing, Log Aggregation**.

---

## 🔥 Tổng Kết
| **Loại** | **Mô tả** | **Ưu Điểm** | **Nhược Điểm** |
|----------|----------|------------|---------------|
| **Direct Queue** | Gửi thẳng vào Queue | Đơn giản, nhanh | Không mở rộng tốt |
| **Direct Exchange** | Định tuyến theo Routing Key | Dễ mở rộng, routing tốt | Cần cấu hình Routing Key |
| **Fanout Exchange** | Broadcast message | Tất cả Queue nhận được message | Không kiểm soát được Routing |
| **Topic Exchange** | Định tuyến theo pattern | Linh hoạt, phù hợp microservices | Cần thiết lập chính xác pattern |
| **Headers Exchange** | Routing theo metadata | Rất linh hoạt | Hiệu suất thấp hơn |
| **RabbitMQ Stream** | Stream processing | Hiệu suất cao, xử lý real-time | Cần mở cổng 5552 |

🚀 **Tùy vào hệ thống, chọn loại phù hợp để tối ưu hiệu suất!**