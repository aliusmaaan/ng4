import angular from 'angular';
import httputil from 'js/common/http-utility';

const serviceManager = angular.module('services', []);

serviceManager.service('httputil', httputil);
