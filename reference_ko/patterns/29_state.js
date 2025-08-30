// 상태 패턴
class On{ handle(ctx){ ctx.state=new Off(); } }
class Off{ handle(ctx){ ctx.state=new On(); } }
class Ctx{ constructor(){ this.state=new Off(); } toggle(){ this.state.handle(this); } }
const c = new Ctx(); c.toggle(); console.log(c.state instanceof On);
