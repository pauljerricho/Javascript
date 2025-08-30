// 플루언트 인터페이스
class Query {
  constructor(){ this.sql='SELECT *'; this.whereClause=''; }
  where(cond){ this.whereClause = ' WHERE ' + cond; return this; }
  toString(){ return this.sql + this.whereClause; }
}
console.log(new Query().where('id=1').toString());
