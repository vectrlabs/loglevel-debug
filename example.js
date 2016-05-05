var log1 = require('./')('pkg:mod1');
var log2 = require('./')('pkg:mod2');
var log3 = require('./')();
log3.debug('ooo');
log1.warn('hey');
log2.debug('hay');
