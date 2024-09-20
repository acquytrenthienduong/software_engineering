## Code như nào thì ăn CPU, như nào thì ăn RAM
- Tiêu thụ CPU: Thực hiện nhiều tính toán, vòng lặp nặng, đệ quy nhiều tầng.
    # Một ví dụ đơn giản về việc tiêu thụ CPU là tính toán dãy Fibonacci lớn.
        def fibonacci(n):
            if n <= 1:
                return n
            else:
                return fibonacci(n-1) + fibonacci(n-2)

        print(fibonacci(40))


- Tiêu thụ RAM: Lưu trữ nhiều dữ liệu trong bộ nhớ hoặc sử dụng cấu trúc dữ liệu lớn: 
    # Ví dụ về việc tiêu tốn RAM khi tạo một danh sách cực lớn
        large_list = [x for x in range(100000000)]  # Tạo danh sách 100 triệu phần tử
        print(len(large_list))
