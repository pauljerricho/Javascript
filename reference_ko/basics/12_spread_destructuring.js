// 전개 연산자(...)와 구조분해 할당
const arr = [1,2,3];
const arr2 = [...arr, 4];
const [first, ...rest] = arr2;
const obj = {a:1, b:2, c:3};
const {a, ...others} = obj;
console.log(first, rest, a, others);
