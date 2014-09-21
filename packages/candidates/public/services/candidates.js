'use strict';

//Candidates service used for candidate REST endpoint
angular.module('mean.candidates').factory('Candidates', ['$resource',
  function($resource) {
    return $resource('candidates/:candidateId', {
      candidateId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
