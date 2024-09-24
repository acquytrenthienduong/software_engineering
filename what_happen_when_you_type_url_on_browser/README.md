## Điều gì xảy ra khi nhập URL trên browser

#### Enter URL:
**https://blog.bytebytego.com/home**

- https:// : tell the browser to connect to the service using TLS, (sometime you can see ftp://, mailto://, or file:// is another protocol)

- blog.bytebytego.com is the site's domain name, poiting to a specific server IP address

- /home is a path to the resource you need

#### Resolve Domain Name:

- Khi bạn nhập 1 URL trên Browser, trình duyệt sẽ bắt đầu kiểm tra cache cục bộ nếu bạn đã truy cập URL này trước đây. 

- Nếu không nó tiếp tục tìm trong hệ điều hành, bởi vì hệ điều hành có thể đã cache IP từ những lần trước truy cập

- DNS Resolver (Bộ phân giải DNS): Nếu không có kết quả từ hệ điều hành, trình duyệt sẽ gửi yêu cầu tới DNS Resolver

- Quá trình tra cứu DNS:
    - Root Name Server: DNS Resolver sẽ truy vấn Root Name Server (Máy chủ tên gốc), máy này sẽ chỉ đến TLD (Top Level Domain) Name Server (ví dụ .com).
    - TLD Name Server: Máy chủ TLD cung cấp vị trí của Authoritative Name Server (Máy chủ tên có thẩm quyền) cho tên miền cụ thể (ví dụ bytebytego.com).
    - Authoritative Name Server: Máy chủ tên có thẩm quyền trả về địa chỉ IP thực sự (ví dụ 172.67.73.33) tương ứng với tên miền.
    - Trả về IP cho trình duyệt

#### Browser khởi tạo request

- HTTTP Request
    Method GET, POST, PUT, DELETE ... từ client -> server ip: 172.67.73.33

- HTTPS Request:
    - Client và server thực hiện quy trình bắt tay 3 bước
    - Server gửi cho client certificate (bao gồm thông tin public key) để client xác thực và đảm bảo CA đáng tin cậy
    - Sau khi xác thực thì trình duyệt tạo ra 1 đoạn dữ liệu gọi là pre-master secret. là một đoạn dữ liệu bí mật ngẫu nhiên mà trình duyệt sẽ dùng để tạo khóa phiên (session key).
    - Trình duyệt mã hóa pre-master secret này bằng khóa công khai mà nó nhận được từ máy chủ. Do khóa công khai có tính chất chỉ có thể mã hóa, còn việc giải mã chỉ có thể thực hiện bởi khóa riêng tư (private key) tương ứng, chỉ máy chủ mới có thể giải mã được pre-master secret.
    - Trình duyệt gửi pre-master secret đã được mã hóa đến máy chủ. Máy chủ sẽ sử dụng khóa riêng tư (private key) của mình để giải mã đoạn pre-master secret.
    - Tạo khóa phiên (Session Key)
    - Từ đó việc trao đổi dữ liệu giữa Client và Server sẽ dùng session key để mã hoá dữ liệu

#### Browser nhận response

- The server sends back an HTTP response that includes an HTTP status code. Common status codes include:
    2xx: Success (e.g., 200 OK)
    3xx: Redirection
    4xx: Client Error (e.g., 404 Not Found)
    5xx: Server Error

#### Handle response
- HTML được phân tích cú pháp thành DOM tree (cây DOM).
- Cây DOM được sử dụng để tạo render tree, cây này kiểm soát cách các phần tử hiển thị trên trang.
- Cuối cùng, trình duyệt sẽ vẽ (paint) các phần tử đã được render trên màn hình.
- CSS được phân tích cú pháp thành CSSOM tree.
- JavaScript load và thực thi, có thể thao tác DOM và CSSOM để thay đổi nội dung trang web 1 cách dynamic


