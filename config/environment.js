/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'library-app',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.url = 'https://mighty-thicket-84032.herokuapp.com';
    ENV.url = 'http://localhost:5000';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.url = 'https://mighty-thicket-84032.herokuapp.com';

  }
  ENV['g-map'] = {
    exclude: true,
    libraries: ['places', 'geometry'],
    key: 'AIzaSyCE-4y1v7GosKiNiJEpAAFf1pHbXQ5r9hA',
    client: '1065828690203872',
    version: '3.26',
    language: 'ru',
    protocol: 'https'
  }

  return ENV;
};
