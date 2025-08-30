// TypedArray/ArrayBuffer
const buf = new ArrayBuffer(8);
const view = new Uint8Array(buf);
view[0] = 255;
console.log(view, buf.byteLength);
