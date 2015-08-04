import Ember from "ember";

var SpeakerRoute = Ember.Route.extend({
    model: function(params) {
        return this.modelFor('dashboard').filter(function(slot) {
            return slot.id === params.id;
        })[0];
    }
});

export default SpeakerRoute;
