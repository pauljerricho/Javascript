// 클래스/상속
class Person {
  constructor(name){ this.name = name; }
  say(){ return `나는 ${this.name}`; }
}
class Dev extends Person {
  constructor(name, lang){ super(name); this.lang = lang; }
  code(){ return `${this.lang} 코딩중`; }
}
console.log(new Dev('Lee','JS').say());
