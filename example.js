var loglevel = require('loglevel');
var debug = require('./')(loglevel);

var log1 = debug.getLogger('pkg:mod1');
var log2 = debug.getLogger('pkg:mo2');
log1.warn('hey');
log2.debug('hay');
