import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  geolocation: Ember.inject.service(),

  userLocation: null,
  disp: false,
  textDisp: false,

  init: function() {
  	this._super();
    var self = this;
    var cnt = 0;
    var rstornt = 'Dominos';
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      	  
          self.set('lat', position.coords.latitude);
          self.set('lng', position.coords.longitude);
          self.set('currentLat', position.coords.latitude);
          self.set('currentLng', position.coords.longitude);
          self.set('restaurant', rstornt);
        
          /* globals $ */
          self.mydata = $.getJSON(config.url + '/userList?lat='+position.coords.latitude+'&long='+position.coords.longitude+'&resto='+ rstornt)
          .then(function(data) {

            for (var i = 0; i < data.results.length; i++){
              var obj = data.results[i];
              data.results[i].types = obj.types[cnt];
            }
            var cCity = data.results[0].vicinity;
            cCity = cCity.split(' ').pop();
            self.set('currentCity', cCity);
            self.set('myData', data);
            return self.mydata;
          });

      }, function(error) {
        console.log('---- show error -------');
        console.log(error);
        });
    } else{
      alert('error....');
    }

  },
  actions: {

    getLocationList(name) {
    var self = this;
    var count = 0;
    var rstornt = self.get('restaurant');
    var url = '';
    var cCity = self.get('currentCity');
    if(name){
        url = config.url + '/userListByCity?city='+name+'&resto='+ rstornt;
        self.set('userLocation', name);
      } 
      else {
        url = config.url + '/userListByCity?city='+cCity+'&resto='+ rstornt;
        self.set('userLocation', cCity);
      }
      /* globals $ */
      $.getJSON(url).then(function(data) {
        if(data.results.length > 0){
          for (var i = 0; i < data.results.length; i++){
            var obj = data.results[i];
            data.results[i].types = obj.types[count];
          }
          
          self.set('lat', data.results[count].geometry.location.lat);
          self.set('lng', data.results[count].geometry.location.lng);
          self.set('myList', data);
          return self.myList;
        } else {
          alert('Sorry data not found..!');
        }
        
      });
    }
  }

});