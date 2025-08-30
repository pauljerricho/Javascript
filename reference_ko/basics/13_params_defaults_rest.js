// 기본 파라미터, 나머지 파라미터
function greet(name='손님'){ return `안녕하세요, ${name}`; }
function sum(...nums){ return nums.reduce((a,b)=>a+b,0); }
console.log(greet(), greet('Kim'), sum(1,2,3,4));
