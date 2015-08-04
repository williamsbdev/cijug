import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return [
            {
                id: "1",
                speaker: "Brandon"
            },
            {
                id: "2",
                speaker: "Darrin"
            }
        ];
    }
});
