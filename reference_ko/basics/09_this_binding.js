// this 바인딩: 호출 방식에 따라 결정 (엄격모드/비엄격 차이 존재)
const obj = {
  x: 10,
  getX(){ return this.x; }
};
const unbound = obj.getX;
console.log('메서드 호출:', obj.getX()); // 10
console.log('그냥 호출:', unbound());    // undefined (strict) 또는 전역(this) 값
// 명시 바인딩
console.log('call 바인딩:', unbound.call(obj));
