// Map/Set/WeakMap/WeakSet
const m = new Map([['a',1]]);
const s = new Set([1,2,2,3]);
console.log(m.get('a'), s.has(2), [...s]);
