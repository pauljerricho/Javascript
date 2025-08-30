// 프로토타입(복제)
const proto = { speak(){ return 'hi'; } };
const obj = Object.create(proto, { name: { value: 'Kim', enumerable: true } });
console.log(obj.name, obj.speak());
