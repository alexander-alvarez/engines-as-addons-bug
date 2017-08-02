/* eslint-env node */
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'my-engine',

  isDevelopingAddon: function() {
    return true;
  }
});
