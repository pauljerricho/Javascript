// 리빌링 모듈 패턴
const Store = (function(){
  let data = {};
  function set(k,v){ data[k]=v; }
  function get(k){ return data[k]; }
  return { set, get };
})();
Store.set('a',1); console.log(Store.get('a'));
