// 원시 타입: string, number, bigint, boolean, symbol, undefined, null
const s = "문자열";
const n = 42;               // number(정수/실수 구분 없음, IEEE-754)
const big = 9007199254740993n; // BigInt (정수 한정)
const b = true;
const sym = Symbol('id');
let u;                      // undefined
const z = null;
console.log(typeof s, typeof n, typeof big, typeof b, typeof sym, typeof u, z);
