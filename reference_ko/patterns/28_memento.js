// 메멘토 (스냅샷)
class Editor{
  constructor(){ this.text=''; }
  snapshot(){ return this.text; }
  restore(s){ this.text = s; }
}
const ed = new Editor(); ed.text='a'; const m = ed.snapshot(); ed.text='b'; ed.restore(m); console.log(ed.text);
