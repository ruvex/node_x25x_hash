node-x25x
===============
Cryptocurrency hashing functions for SIN

Current version v1.0.0
Usage
-------
```js
var x25x = require('node-x25x');
var buf = Buffer.from('password', 'utf8');
var hash = x25x.x25x(buf);
console.log(hash);
// => <Buffer 13 9c 16 0c a5 5f 02 e2 81 c6 9e fe b9 6b 8b c1 86 a2 d7 3b 17 66 56 20 ae 51 ac 45 e5 78 90 a1>
