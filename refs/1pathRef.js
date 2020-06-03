const path = require('path')

const {
  basename,
  dirname,
  extname,
  parse,
  join,
  resolve
} = path

const fn = __filename

console.log(fn);
console.log(basename(fn))
console.log(dirname(fn))
console.log(extname(fn))
console.log(parse(fn))
console.log(parse(fn).ext)

console.log(join(__dirname, 'test', 'second.html'));
console.log(resolve(__dirname, './test', '/second.html'));