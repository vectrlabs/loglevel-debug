### Example 

```
var loglevel = require('loglevel');
var debug = require('./')(loglevel);

var log1 = debug.getLogger('pkg:mod1');
var log2 = debug.getLogger('pkg:mod2');
log1.warn('hey');
log2.debug('hay');
```

```
$ DEBUG='pkg:mod1' node example.js
hey
```
