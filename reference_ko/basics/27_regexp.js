// 정규표현식
const re = /ab+c/i;
console.log(re.test('ABBC'));
console.log('abbbc'.match(re));
