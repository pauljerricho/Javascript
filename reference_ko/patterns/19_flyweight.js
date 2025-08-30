// 플라이웨이트: 공유 객체 캐시
class Icon {
  constructor(type){ this.type=type; }
}
const cache = new Map();
const getIcon = type => cache.get(type) || (cache.set(type, new Icon(type)), cache.get(type));
console.log(getIcon('doc') === getIcon('doc'));
