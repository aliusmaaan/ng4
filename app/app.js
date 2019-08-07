import 'jquery';
import angular from 'angular';
import 'lodash';
import 'angular-animate';
import 'angular-ui-bootstrap';
import 'ngLetterAvatar';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-sanitize';
import 'js/services/services';
import 'js/factories/factory-manager';
import 'directives/directives';
import 'js/services/version-service';
import 'js/constants/URLconstants';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import httpInterceptor from 'js/common/http-interceptor';
import toDoRoute from 'js/todo-list/toDo.routes';
import searchComponent from 'js/common/searchComponent.js';
import windowBackCtrl from 'js/common/windowBack.js';

import mainRoutes from 'js/students/students.routes';
import classesRoutes from 'js/classes/classes.routes';
import evntsRoutes from 'js/next-events/next-events.routes';

angular.module('myCreightonApp', ['ngResource', 'ngAnimate', 'ui.bootstrap', 'ui.router', 'services', 'directives', 'myCreightonApp.classes', 'myCreightonApp.toDoModule', 'constants', 'ngSanitize', 'version', 'factoriesManager', 'ngLetterAvatar', 'myCreightonApp.schoolAndSemesterModule', 'myCreightonApp.nextEvents'])
    .controller('windowBackCtrl', windowBackCtrl)
    .factory('creightonInterceptor', httpInterceptor)
    .config(mainRoutes).component('search', searchComponent);

angular.module('myCreightonApp.classes', ['ui.router'])
    .config(classesRoutes);


angular.module('myCreightonApp.toDoModule', ['ui.router'])
    .config(toDoRoute);
angular.module('myCreightonApp.nextEvents', ['ui.router'])
    .config(evntsRoutes);