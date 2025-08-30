// 스코프 & 클로저: 내부 함수가 외부 변수에 접근
function makeCounter(){
  let count = 0;
  return () => ++count;
}
const counter = makeCounter();
console.log(counter(), counter(), counter());
