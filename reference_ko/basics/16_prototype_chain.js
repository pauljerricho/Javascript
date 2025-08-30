// 프로토타입과 프로토타입 체인
function Animal(name){ this.name = name; }
Animal.prototype.speak = function(){ return this.name + ' 소리'; };
const dog = new Animal('멍멍이');
console.log(dog.speak());
console.log(Object.getPrototypeOf(dog) === Animal.prototype);
