/* eslint-env node */
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'my-engine',

  lazyLoading: {
    enabled: false
  },

  isDevelopingAddon: function() {
    return true;
  }
});
