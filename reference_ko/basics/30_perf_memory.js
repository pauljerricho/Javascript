// 간단 성능 팁: 불변 업데이트/스프레드 비용/메모이제이션 예시
const memo = (fn)=>{
  const cache = new Map();
  return (x)=> cache.has(x) ? cache.get(x) : (cache.set(x, fn(x)), cache.get(x));
};
const slow = (n)=> { for(let i=0;i<1e6;i++); return n*n; };
const fast = memo(slow);
console.time('slow'); console.log(fast(123)); console.timeEnd('slow');
console.time('cached'); console.log(fast(123)); console.timeEnd('cached');
