## Redis là gì?

Hệ thông lưu trữ key-value trên RAM cho hiệu năng cực cao, thường được dùng làm cache trong mô hình phần mềm

#### Các mô hình phổ biến:
1. Single node:
    - 1 con redis duy nhất
2. Master slave
    - 1 master, nhiều slave => giảm tài read cho master
    - master: read & write
    - slave: read
khi cụm có vấn đề, có thể promote 1 con slave lên làm master manual

3. Cluster
    - nhiều master, nhiều slave 
    - master: read & write
    - slave: read
khi cụm có vấn đề, tự bầu 1 con lên làm master mới, tính HA, Failover cao hơn, tuy nhiên tốn tài nguyên hơn
