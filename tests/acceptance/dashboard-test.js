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
    Ember.$.fauxjax.new({
        request: {
            url: "/api/sessions",
            method: "GET"
        },
        response: {
            status: 200,
            content: [
                {
                    id: "1",
                    speaker: "Brandon",
                    session: "Ember"
                },
                {
                    id: "2",
                    speaker: "Darrin",
                    session: "Angular"
                }
            ]
        }
    });
    visit('/dashboard');
    andThen(function() {
        assert.equal(currentURL(), '/dashboard');
        assert.equal(find('.speaker').length, 2);
    });
    click(".speaker:eq(0)");
    andThen(function() {
        assert.equal(currentURL(), '/dashboard/speaker/1');
        assert.equal(find('.session').text(), 'Brandon is speaking about Ember');
    });
});
