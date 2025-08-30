// 스펙ification (규칙 조합)
const Spec = pred => ({ test: pred, and: other=>Spec(x=>pred(x)&&other.test(x)), or: other=>Spec(x=>pred(x)||other.test(x)) });
const isEven = Spec(x=>x%2===0), positive=Spec(x=>x>0);
console.log(isEven.and(positive).test(4));
