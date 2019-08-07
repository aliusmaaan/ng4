import angular from 'angular';
import creightonInterceptor from 'js/common/http-interceptor';

const factoriesManager = angular.module('factoriesManager', []);

factoriesManager.factory('creightonInterceptor', creightonInterceptor);

