// JSON 직렬화/역직렬화
const obj = {a:1, b:2};
const j = JSON.stringify(obj);
console.log(j, JSON.parse(j));
