// truthy/falsy와 null/undefined
const list = [0, 1, '', 'a', null, undefined, [], {}];
console.log(list.map(v => !!v)); // falsy: 0, '', null, undefined, NaN, false
