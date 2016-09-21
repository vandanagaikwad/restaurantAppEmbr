import Ember from 'ember';

export default Ember.Route.extend({
	
	actions: {
		listToggled: function(choice) {
			this._super();
    		var self = this;
	      
	      this.controller.set('list', choice);
	      var latitude = self.controller.get('currentLat');
      	  var longitude = self.controller.get('currentLng');

	      if(choice === 'currentLoc'){
	      	this.controller.set('disp', true);
	      	this.controller.set('textDisp', false);
	      	this.controller.set('userLocation', null);
	      	this.controller.set('city', '');
	      	this.controller.set('restaurant', '');
	      	self.controller.set('lat', latitude);
          	self.controller.set('lng', longitude);
	      		
	      } else if(choice === 'currentDominosLoc') {
      		this.controller.set('disp', false);
	      	this.controller.set('userLocation', null);
	      	self.controller.set('lat', latitude);
          	self.controller.set('lng', longitude);
          	this.controller.set('city', '');
          	this.controller.set('restaurant', '');
		    
	      } else {
	      	this.controller.set('disp', true);
	      	this.controller.set('textDisp', true);
	      }
	      
	    }
	},

	setupController() {
		
		if(this.controller.get('list') === undefined){
			this.controller.set('list', "currentDominosLoc");
		}
		
	}

});