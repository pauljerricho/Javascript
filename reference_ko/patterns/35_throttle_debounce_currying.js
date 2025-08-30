// 쓰로틀/디바운스/커링/부분적용/메모이제이션
const throttle=(fn,ms)=>{ let ok=true; return (...a)=>{ if(!ok) return; ok=false; fn(...a); setTimeout(()=>ok=true,ms); }; };
const debounce=(fn,ms)=>{ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a),ms); }; };
const curry = fn => a => b => fn(a,b);
const partial = (fn, ...a) => (...b) => fn(...a, ...b);
const memo = fn => { const c=new Map(); return (x)=> c.has(x)?c.get(x):(c.set(x,fn(x)),c.get(x)); };
const add=(a,b)=>a+b;
console.log(curry(add)(2)(3), partial(add,2)(3), memo(x=>x*x)(9));
