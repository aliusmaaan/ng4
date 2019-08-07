import angular from 'angular';
import 'angular-ui-router';
import schoolAndSemesterRoutes from 'js/SchoolAndSemester/SchoolAndSemester-Routes.js';

const classManager = angular.module('myCreightonApp.schoolAndSemesterModule', ['ui.router']);
classManager.config(schoolAndSemesterRoutes);
