import { test } from 'qunit';
import moduleForAcceptance from 'engines-as-addons-bug/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | hello world');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal('\nHello World', find('*')[0].textContent);
  });
});
