import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', function() {
      this.route('speaker', {path: '/speaker/:id'});
  });
});

export default Router;
