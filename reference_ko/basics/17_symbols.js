// 심볼: 충돌 없는 키
const ID = Symbol('id');
const user = { name:'Kim', [ID]: 123 };
console.log(Object.keys(user));    // ['name'] (심볼 키는 제외)
console.log(user[ID]);
