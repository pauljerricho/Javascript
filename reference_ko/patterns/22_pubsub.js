// 퍼블리시-서브스크라이브 (토픽 기반)
const Bus = (()=>{
  const topics = new Map();
  return {
    sub(topic, fn){ (topics.get(topic)||topics.set(topic,[]).get(topic)).push(fn); },
    pub(topic, data){ (topics.get(topic)||[]).forEach(fn=>fn(data)); }
  };
})();
Bus.sub('log', x=>console.log('recv',x));
Bus.pub('log', {msg:'hello'});
