## Reactive Programing
- Reactive programming is programming with asynchronous data streams

==> Khái niệm trên cần chú ý đến 2 điểm quan trọng **Stream** & **Ansynchronous**
    - Giá trị trả về từ task đó (Data)
    - Thông báo lỗi (Erro nếu có)
    - Thời điểm task finish (Completed)

**RX = OBSERVABLE + OBSERVER + SCHEDULERS**
    - Observable
    - Observers
    - Schedulers

nhìn chung reactive programing cung cấp cách phương thức mạnh mẽ cho phép thao tác với stream ví dụ như: filter, take, scan, map, flatMap, reduce, combine, merge, zip