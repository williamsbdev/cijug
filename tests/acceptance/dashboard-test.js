import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'cijug/tests/helpers/start-app';

module('Acceptance | dashboard', {
    beforeEach: function() {
        this.application = startApp();
    },
    afterEach: function() {
        Ember.run(this.application, 'destroy');
    }
});

test('visiting /dashboard', function(assert) {
    visit('/dashboard');
    andThen(function() {
        assert.equal(currentURL(), '/dashboard');
        assert.equal(find('.speaker').length, 2);
    });
});
