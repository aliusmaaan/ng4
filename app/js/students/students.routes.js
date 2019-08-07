import 'views/students/student-login.html';
import 'sass/app.scss';
import mainCtrl from 'js/students/controllers/students-ctrl';
import homeCtrl from 'js/students/controllers/studentshome-ctrl';
import dashboardCtrl from 'js/students/controllers/dashboard-ctrl';

export default /*@ngInject*/ function($httpProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('main', {
        url: '/',
        templateUrl: 'views/students/student-login.html',
        controller: mainCtrl,
        controllerAs: 'mainCtrl'
    })
    .state('home', {
        url: '/home',
        views: {
            '': {
                templateUrl: 'views/students/student-home.html',
                controller: homeCtrl,
                controllerAs: 'homeCtrl'
            }
        }
    })
    .state('home.first', {
        url: '/first/:userName',
        templateUrl: 'views/dashboard/Creighton-dashboard.html',
        controller: dashboardCtrl,
        controllerAs: 'dashboardCtrl'
    })
    .state('home.second', {
        url: '/second',
        templateUrl: 'views/students/semester-start.html'
    })
    .state('home.third', {
        url: '/third',
        templateUrl: 'views/students/academics.html'
    });
    $httpProvider.interceptors.push('creightonInterceptor');
}
