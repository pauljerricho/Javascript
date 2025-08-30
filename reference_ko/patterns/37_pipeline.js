// 파이프라인
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const res = pipe(x=>x+1, x=>x*2, x=>'결과:'+x)(3);
console.log(res);
