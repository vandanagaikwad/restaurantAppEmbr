// application/index/controller.js
import Ember from 'ember';

export default Ember.Controller.extend({
  title:  'Google Map Location Tracker with Ember CLI',
  mTitle: Ember.computed('expenses', 'title', {
    get() {
      const data = this.get('title');
      return data;
    }
  }),
  actions: {
    
  },
});