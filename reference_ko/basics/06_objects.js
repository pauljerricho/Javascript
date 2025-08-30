// 객체 리터럴 및 속성 접근
const user = {
  id: 1,
  name: 'Kim',
  'phone-number': '010-0000-0000',
  greet() { return `안녕, ${this.name}`; }
};
console.log(user['phone-number'], user.greet());
// 동적 키
const key = 'email';
user[key] = 'kim@example.com';
console.log(user);
