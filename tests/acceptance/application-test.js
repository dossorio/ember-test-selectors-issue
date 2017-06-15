import { test } from 'qunit';
import moduleForAcceptance from 'test-selectors/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | application');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    assert.expect(
      find(testSelector('component', 'test')).text().trim(),
      'This is a test',
      'The assertion is using testSelector successfully and rendering the expected text'
    );
  });
});
