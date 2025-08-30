// 배열: 기본, 고차함수(map/filter/reduce 등)
const arr = [1,2,3,4,5];
console.log(arr.map(x => x*2));
console.log(arr.filter(x => x%2===0));
console.log(arr.reduce((a,b)=>a+b, 0));
