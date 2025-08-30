// 빌더
class Meal { constructor(){ this.main=''; this.sides=[]; } }
class MealBuilder {
  constructor(){ this.m = new Meal(); }
  main(v){ this.m.main=v; return this; }
  addSide(v){ this.m.sides.push(v); return this; }
  build(){ return JSON.parse(JSON.stringify(this.m)); }
}
console.log(new MealBuilder().main('스테이크').addSide('샐러드').build());
