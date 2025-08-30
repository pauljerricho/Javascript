// 기초: 변수/상수 (var/let/const) 와 스코프
// - var: 함수 스코프, 재선언 허용 (권장 X)
// - let: 블록 스코프, 재선언 불가, 재할당 가능
// - const: 블록 스코프, 재선언 불가, 재할당 불가(객체 속성은 변경 가능)
var v = 1;
let x = 2;
const PI = 3.14159;
if (true) {
  var v = 10;   // 같은 함수 스코프 전체에 영향
  let x = 20;   // 블록 내부에서만 유효
}
console.log('var v=', v); // 10
console.log('let x=', x); // 2
console.log('const PI=', PI);
