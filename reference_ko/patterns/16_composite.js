// 컴포지트
class Node {
  constructor(name){ this.name=name; this.children=[]; }
  add(child){ this.children.push(child); }
  toString(){ return this.name + (this.children.length? '('+this.children.map(c=>c.toString()).join(',')+')':'' ); }
}
const root = new Node('root'); const a=new Node('a'); root.add(a); a.add(new Node('leaf'));
console.log(root.toString());
