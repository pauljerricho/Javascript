// 팩토리 메서드
class Product { use(){ return 'base'; } }
class A extends Product { use(){ return 'A'; } }
class B extends Product { use(){ return 'B'; } }
function create(kind){ return kind==='A' ? new A() : new B(); }
console.log(create('A').use(), create('B').use());
