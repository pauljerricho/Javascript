// 믹스인
const canFly = Base => class extends Base { fly(){ return 'flying'; } };
class Animal {}
class Bird extends canFly(Animal) {}
console.log(new Bird().fly());
