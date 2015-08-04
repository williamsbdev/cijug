import Ember from 'ember';
import PromiseMixin from "ember-promise/mixins/promise";

export default Ember.Route.extend({
    model: function() {
        return PromiseMixin.xhr('/api/sessions').then(function(response) {
            return response;
        });
    }
});
