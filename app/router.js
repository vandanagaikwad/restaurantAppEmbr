import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  geolocation: Ember.inject.service()
});

Router.map(function() {
  this.route('about');
});

export default Router;
