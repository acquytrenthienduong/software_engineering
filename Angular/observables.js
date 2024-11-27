// map, switchMap, mergeMap, concatMap trong RxJS
// là các toán tử (operator) thao tác với Observables
// mỗi toán tử có cách hoạt động và mục đích khác nhau, đặc biệt là trong các trường hợp liên quan đến việc chuyển đổi dữ liệu hoặc gọi các Observable lồng nhau.

// map
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3)
  .pipe(
    map(value => value * 2)
  )
  .subscribe(result => console.log(result));
// Output: 2, 4, 6


// switchMap
// Giả sử bạn có một ô tìm kiếm và muốn gọi API mỗi khi người dùng nhập một ký tự mới. 
// switchMap sẽ đảm bảo rằng yêu cầu trước sẽ bị hủy nếu có một yêu cầu mới (người dùng tiếp tục nhập).

import { fromEvent } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const searchBox = document.getElementById('searchBox') as HTMLInputElement;

fromEvent(searchBox, 'input')
  .pipe(
    debounceTime(300), // đợi 300ms sau khi người dùng ngừng gõ
    map(event => (event.target as HTMLInputElement).value),
    switchMap(query => ajax.getJSON(`https://api.example.com/search?q=${query}`))
  )
  .subscribe(result => console.log(result));


// mergeMap Chức năng: mergeMap cũng chuyển đổi từ một Observable thành một Observable khác, 
// nhưng nó không hủy Observable trước đó mà thay vào đó sẽ merge (gộp) tất cả các Observable con lại với nhau.
// Ứng dụng: Thường được dùng khi bạn cần thực hiện nhiều yêu cầu không phụ thuộc lẫn nhau và không cần hủy bỏ các yêu cầu trước đó.


import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

of('user1', 'user2', 'user3')
  .pipe(
    mergeMap(user => ajax.getJSON(`https://api.example.com/user/${user}`))
  )
  .subscribe(result => console.log(result));

// concatMap
// Chức năng: concatMap cũng chuyển đổi từ một Observable này sang một Observable khác và chờ cho mỗi Observable hoàn thành trước khi bắt đầu Observable tiếp theo. 
// Nó không hủy bất kỳ Observable nào, nhưng xử lý lần lượt.
// Ứng dụng: Dùng khi bạn muốn thực hiện các thao tác tuần tự (theo thứ tự), ví dụ như khi các yêu cầu API cần được thực hiện theo một trình tự nhất định.

import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

of('step1', 'step2', 'step3')
  .pipe(
    concatMap(step => ajax.getJSON(`https://api.example.com/${step}`))
  )
  .subscribe(result => console.log(result));


// Để quản lý nhiều Observable mà chỉ phát ra kết quả sau khi tất cả các Observable đã hoàn thành, ta có thể sử dụng toán tử forkJoin.
// forkJoin là một toán tử trong RxJS giúp kết hợp nhiều Observable lại với nhau. Điểm đặc biệt của forkJoin là nó chờ tất cả các Observable hoàn thành và chỉ phát ra một lần duy nhất (emit) với tất cả các kết quả khi mỗi Observable đã phát giá trị cuối cùng.

import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const api1 = ajax.getJSON('https://api.example.com/user/1'); // Observable 1
const api2 = ajax.getJSON('https://api.example.com/user/2'); // Observable 2
const api3 = ajax.getJSON('https://api.example.com/user/3'); // Observable 3

forkJoin([api1, api2, api3]).subscribe(results => {
  console.log(results);
  // Output:
  // [
  //   { name: 'Alice', age: 25 },   // Kết quả từ api1
  //   { name: 'Bob', age: 30 },     // Kết quả từ api2
  //   { name: 'Charlie', age: 35 }  // Kết quả từ api3
  // ]
});


// Trong RxJS, có một số cách để xử lý lỗi với các toán tử như catchError, retry, và retryWhen. Dưới đây là cách dùng phổ biến của từng toán tử:


// catchError
// Toán tử catchError cho phép bạn bắt lỗi trong chuỗi Observable và trả về một Observable khác hoặc giá trị thay thế.

import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

ajax.getJSON('https://api.example.com/user/1')
  .pipe(
    catchError(error => {
      console.error('Đã xảy ra lỗi:', error);
      return of({ name: 'Unknown', age: null }); // Trả về giá trị thay thế
    })
  )
  .subscribe(data => console.log(data));
// Nếu có lỗi, sẽ log ra { name: 'Unknown', age: null } thay vì lỗi


//retry và retryWhen
// retry được dùng để tự động thử lại một Observable khi gặp lỗi, thường hữu ích khi xử lý lỗi tạm thời (ví dụ lỗi mạng).
// retry(n): n là số lần thử lại trước khi hủy Observable.
// retryWhen: Cho phép bạn xác định logic tùy chỉnh để thử lại dựa trên điều kiện của bạn.

import { retry } from 'rxjs/operators';

ajax.getJSON('https://api.example.com/user/1')
  .pipe(
    retry(3) // Thử lại tối đa 3 lần nếu có lỗi
  )
  .subscribe({
    next: data => console.log(data),
    error: err => console.error('Gọi API thất bại sau 3 lần thử:', err)
  });
