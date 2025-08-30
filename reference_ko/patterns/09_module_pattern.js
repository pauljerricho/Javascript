// 모듈 패턴 (즉시실행 + 클로저로 은닉)
const Counter = (function(){
  let n = 0;
  return { inc(){ return ++n; }, get(){ return n; } };
})();
console.log(Counter.inc(), Counter.get());
