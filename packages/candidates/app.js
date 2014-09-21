'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Candidates = new Module('candidates');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Candidates.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Candidates.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Candidates.menus.add({
    'roles': ['authenticated'],
    'title': 'Candidates',
    'link': 'all candidates',
    'items': {
        'roles': ['authenticated'],
        'title': 'Create New Candidate',
        'link': 'create candidate'
    }
  });

  Candidates.aggregateAsset('css', 'candidates.css');

  return Candidates;
});
