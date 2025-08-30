// 템플릿 메서드
class Template{
  run(){ return this.step1()+this.step2(); }
  step1(){ return 'A'; }
  step2(){ throw 'override'; }
}
class Impl extends Template{ step2(){ return 'B'; } }
console.log(new Impl().run());
