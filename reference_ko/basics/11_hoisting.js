// 호이스팅: 선언이 위로 끌어올려지지만 초기화는 제자리
console.log(a); // undefined (var만 허용)
var a = 10;
// let/const는 TDZ(Temporal Dead Zone)로 인해 참조 시 에러
