// 퍼사드
class A{ a(){return 'A';} } class B{ b(){return 'B';} }
class Facade{ run(){ return new A().a() + new B().b(); } }
console.log(new Facade().run());
