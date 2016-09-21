import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

//Stub location service
const locationStub = Ember.Service.extend({
  city: 'New York',
  country: 'USA',
  currentLocation: {
    x: 1234,
    y: 5678
  },

  getCurrentCity() {
    return this.get('city');
  },
  getCurrentCountry() {
    return this.get('country');
  },
  getCurrentPosition() {
    return this.get('currentLocation');
  }
});

moduleFor('controller:index', 'Unit | Controller | index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  integration: true,

  beforeEach: function () {
    this.register('service:geolocation', locationStub);
    this.inject.service('geolocation', { as: 'location' });
  }
});

// wrap the test in the run loop because we are dealing with async functions
Ember.run(function() {

test('should reveal current location', function(assert) {
  // get the controller instance
  const ctrl = this.subject();
  ctrl.set('city', 'New York');
  ctrl.set('country', 'USA');

  assert.equal(ctrl.get('city'), this.location.getCurrentCity(), 'You currently are located in New York city');
  assert.equal(ctrl.get('country'), this.location.getCurrentCountry(), 'You currently are located in USA country');
});

});
