var engine = require('engine.io-stream');
var inject = require('reconnect-core');

module.exports = inject(function () {
  var args = [].slice.call(arguments);
  return engine.apply(null, args);
});
