## Event loop
Event loop (vòng lặp sự kiện) là một cơ chế quan trọng trong các hệ thống xử lý sự kiện bất đồng bộ (asynchronous), như trong Node.js và trình duyệt web (browser). Nó chịu trách nhiệm xử lý các tác vụ không đồng bộ (I/O, timeout, event listeners) mà không cần phải chặn chương trình chính, cho phép ứng dụng có thể thực hiện nhiều công việc đồng thời mà không cần đợi các tác vụ kết thúc.

Call Stack, Task Queue, và Event Loop không phải là "thành phần" vật lý, mà là các cơ chế và khái niệm logic trong các môi trường lập trình như JavaScript để quản lý và thực thi các tác vụ đồng bộ và bất đồng bộ.

#### Call Stack
Nơi chứa các hàm khi được thực thi, khi hàm kết thúc nó sẽ được xoá khỏi stack

Cơ chế:
    Khi chương trình thực thi một đoạn mã đồng bộ (synchronous), các lệnh (hàm) sẽ được thêm lần lượt vào call stack.
    Nếu một hàm lại gọi đến hàm khác, nó cũng được thêm vào call stack. Quá trình này lặp lại cho đến khi không còn hàm nào được gọi và kết thúc.

#### Task Queue
Task Queue là một hàng đợi (queue) chứa các nhiệm vụ bất đồng bộ (asynchronous tasks) đã hoàn thành hoặc sẵn sàng để được thực thi. Các nhiệm vụ này bao gồm các callback của setTimeout, I/O, events, promises, hoặc network requests.

Khi một tác vụ bất đồng bộ hoàn thành (ví dụ như một setTimeout), callback của nó không được thực thi ngay lập tức. Thay vào đó, nó sẽ được đưa vào Task Queue và đợi cho đến khi Call Stack trống, lúc đó Event Loop sẽ lấy nhiệm vụ từ Task Queue và đẩy vào Call Stack để thực hiện.

#### Microtask Queue
Microtask Queue (Hàng đợi microtask) là một phần quan trọng của cơ chế xử lý bất đồng bộ trong JavaScript, dùng để quản lý các tác vụ có mức độ ưu tiên cao hơn so với các macrotask (hoặc đơn giản là task) trong Task Queue.

Các tác vụ trong Microtask Queue sẽ được xử lý ngay lập tức sau khi JavaScript hoàn tất xử lý các tác vụ đồng bộ trong Call Stack, nhưng trước khi các tác vụ trong Task Queue được thực hiện. Điều này giúp các microtask có thể hoàn thành nhanh chóng trước khi event loop chuyển sang các nhiệm vụ khác.

- Ưu tiên cao hơn Task Queue:
- Tác vụ trong Microtask Queue:
    1. Promise callbacks
    2. MutationObserver
    3. process.nextTick()
- Microtasks sẽ chạy toàn bộ trước khi thực hiện bất kỳ Macrotask nào

Example:
    ```
    function logA() { console.log('A') }
    function logB() { console.log('B') }
    function logC() { console.log('C') }
    function logD() { console.log('D') }

    // Click the "RUN" button to learn how this works!
    logA(); ---> 
    setTimeout(logB, 0); ---> vào task queue
    Promise.resolve().then(logC); ---> vào microtask queue
    logD()
    ```

để dễ hình dung có thể xem hình ảnh này https://www.jsv9000.app/