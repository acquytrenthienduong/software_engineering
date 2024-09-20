## Hash la gi
    Hàm hash là một hàm chuyển đổi dữ liệu (ví dụ như chuỗi mật khẩu) thành một giá trị băm (hash value) có độ dài cố định. Các tính chất chính của hàm hash là:
        - Độ xác định: Cùng một đầu vào sẽ luôn cho ra cùng một kết quả.
        - Khó đảo ngược: Không thể lấy giá trị băm mà tính ngược ra dữ liệu ban đầu (một chiều).
        - Kháng va chạm: Rất khó để hai giá trị khác nhau cho ra cùng một giá trị băm.

## Salt la gi
    Salt là một chuỗi ngẫu nhiên được thêm vào mật khẩu trước khi nó được băm. Điều này giúp bảo vệ mật khẩu khỏi các cuộc tấn công rainbow table (bảng tra cứu sẵn các mật khẩu đã băm) và các cuộc tấn công lặp lại đối với cùng một mật khẩu.

## Tại sao cần Salt?
    Nếu hai người dùng có cùng mật khẩu, việc băm mà không sử dụng salt sẽ dẫn đến hai giá trị băm giống hệt nhau. Như vậy, nếu hacker có danh sách các hash và biết một hash tương ứng với mật khẩu nào đó, họ sẽ suy ra các tài khoản khác có cùng mật khẩu.

    Khi thêm salt, mỗi người dùng sẽ có một chuỗi salt khác nhau, và mật khẩu băm của họ sẽ khác nhau, ngay cả khi mật khẩu gốc giống nhau.

Có 2 cách để lưu salt khi băm:

Cách 1:
- tạo 1 trường riêng trong db, lưu lại salt => lúc so sánh mật khẩu thì lấy ra để băm cùng với mật khẩu người dùng nhập vào

Cách 2: 
Khi lưu mật khẩu:
    Tạo salt ngẫu nhiên (ví dụ: 16 byte).
    Kết hợp salt và mật khẩu rồi băm.
    Kết hợp salt và hash (thường là nối lại thành một chuỗi).
    Lưu chuỗi kết hợp (salt + hash) vào cơ sở dữ liệu.

    ```
        import hashlib
        import os

        def hash_password(password):
            salt = os.urandom(16)  # Tạo salt ngẫu nhiên 16 byte
            hashed = hashlib.sha256(salt + password.encode()).hexdigest()
            # Kết hợp salt và hash, lưu cả hai vào cùng một chuỗi
            return salt.hex() + hashed

        password = "my_secure_password"
        stored_value = hash_password(password)
        print(stored_value)  # Đây là giá trị lưu trong cơ sở dữ liệu

    ```

Khi kiểm tra mật khẩu (quá trình đăng nhập):
    Lấy chuỗi băm (hash) từ cơ sở dữ liệu.
    Tách phần đầu (ví dụ: 16 byte đầu) ra làm salt.
    Sử dụng salt này để băm mật khẩu người dùng nhập vào.
    So sánh giá trị băm kết quả với phần băm lưu trong cơ sở dữ liệu.
    
    ```
        def verify_password(stored_value, input_password):
        salt = bytes.fromhex(stored_value[:32])  # 16 byte đầu tiên (32 ký tự hex) là salt
        hashed = stored_value[32:]  # Phần còn lại là mật khẩu băm
        # Băm lại mật khẩu nhập vào với salt
        hashed_input = hashlib.sha256(salt + input_password.encode()).hexdigest()
        return hashed_input == hashed

        # Kiểm tra mật khẩu
        is_valid = verify_password(stored_value, "my_secure_password")
        print(is_valid)  # True nếu mật khẩu đúng, False nếu sai
    ```