import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:about', 'Unit | Controller | about', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  integration: true,
});

// wrap the test in the run loop because we are dealing with async functions
Ember.run(function() {
  test('should be rendered with its title', function(assert) {
    // get the controller instance
    const ctrl = this.subject();
    ctrl.set('title', 'Google Map Location Tracker with Ember CLI');

    assert.equal(ctrl.get('title'), 'Google Map Location Tracker with Ember CLI');

  });
});
