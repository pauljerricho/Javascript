// 전략
const add=(a,b)=>a+b, mul=(a,b)=>a*b;
const run=(fn,a,b)=>fn(a,b);
console.log(run(add,2,3), run(mul,2,3));
