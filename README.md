### Example 

```
var log1 = require('loglevel-debug')('pkg:mod1');
var log2= require('loglevel-debug')('pkg:mod2');

log1.warn('hey');
log2.debug('hay');
```

```
$ DEBUG='pkg:mod1' node example.js
hey
```