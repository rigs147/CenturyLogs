'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Century Link';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });

        window.alert("yo");

        $scope.model = {
            accountId: null
        }

        $scope.accountSearch = function(id) {
            $location.path('/account/:accountId'.replace(':accountId', id));
        };

    }])

    // Path: /account
    .controller('AccountCtrl', ['$scope', '$location', '$window', '$stateParams', 'version', 'rest', function ($scope, $location, $window, $stateParams, version, rest) {
        $scope.$root.title = 'AngularJS SPA | About';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });

        $scope.accountId = $stateParams.accountId;
        $scope.data = null;

        rest.getAccountSummary($scope.accountId).get(function(data) {
            $scope.data = data;
        });

        $.ajax({
            url: 'https://api.tier3.com/REST/Billing/GetAccountSummary/' + $scope.accountId,
            dataType: 'jsonp',
            success: function (data) {
                window.alert(data);
                //$('body').text(data);

            }
        });


        function PopulateData() {

            return $.getJSON("https://api.tier3.com/REST/Billing/GetAccountSummary/" + $scope.accountId).then(function (data) {

                window.alert(data);
            })
        };

        PopulateData();

    }])

    // Path: /login
    .controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Sign In';
        // TODO: Authorize a user
        $scope.login = function () {
            $location.path('/');
            return false;
        };
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);