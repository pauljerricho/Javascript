// 이터러블/이터레이터: for..of 사용 가능
const iterable = {
  data: [1,2,3],
  [Symbol.iterator](){
    let i = 0;
    return { next: () => ({ value: this.data[i++], done: i>this.data.length }) };
  }
};
for (const v of iterable) console.log(v);
