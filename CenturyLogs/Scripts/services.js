'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])


    //.value('version', '0.1')
    .service('rest', [
        '$resource', function($resource) {

            var rest = {
                getAccountSummary: function(params) {
                    return $resource('https://api.tier3.com/REST/Billing/GetAccountSummary/:accountId', { accountId: params });
                }
            }
            return rest;
        }
    ])
    .value('version', '0.1');




