'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
    'ngRoute',
    'moviecat.movie_detail',
    'moviecat.movie_list',
    'moviecat.directives.auto_focus',
  ])
  // 为模块定义一些常量
  .constant('AppConfig', {
    pageSize: 10,
    listApiAddress: 'https://api.douban.com/v2/movie/',
    detailApiAddress: 'https://api.douban.com/v2/movie/subject/'
  })
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
  }])
  .controller('SearchController', [
    '$scope',
    '$route',
    'AppConfig',
    function($scope, $route, AppConfig) {
      $scope.input = ''; // 取文本框中的输入
      $scope.search = function() {
        // console.log($scope.input);
        $route.updateParams({ category: 'search', q: $scope.input });
      };
    }
  ]);

