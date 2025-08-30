// 반복자 (커스텀)
const range = (n)=>({
  [Symbol.iterator](){ let i=0; return { next(){ return i<n ? {value:i++, done:false}:{done:true}; } }; }
});
console.log([...range(3)]);
