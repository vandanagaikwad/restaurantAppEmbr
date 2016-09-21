import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('places-lists', 'Integration | Component | places lists', {
  integration: true
});

test('it should render the places lists', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const lists = {};

  this.set('lists', lists);

  this.render(hbs`{{places-lists lists=lists}}`);


  // Template block usage:
  this.render(hbs`
    {{#places-lists lists}}
        
    {{/places-lists}}
  `);

  this.set('Name', 'Pune');
  this.set('Type', 'Restaurants');
  this.set('Address', 'Pune satara road, Katraj, Pune');

  assert.equal(this.get('Name'), 'Pune');

  assert.equal(this.get('Type'), 'Restaurants');

  assert.equal(this.get('Address'), 'Pune satara road, Katraj, Pune');

});
