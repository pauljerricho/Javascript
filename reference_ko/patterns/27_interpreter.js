// 인터프리터 (아주 단순한 수식)
const evalExpr = (s)=> s.split('+').map(Number).reduce((a,b)=>a+b);
console.log(evalExpr('10+20+3'));
