import Ember from 'ember';
import greeting from 'shared-addon';

export default Ember.Controller.extend({
  greeting: greeting()
});
