// 함수 선언/표현/화살표 함수, this 차이
function add(a,b){ return a+b; }
const sub = function(a,b){ return a-b; };
const mul = (a,b) => a*b;
console.log(add(2,3), sub(5,2), mul(3,4));
