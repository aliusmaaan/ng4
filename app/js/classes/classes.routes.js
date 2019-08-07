import 'views/classes/classes.html';
import 'css/classes.css';
import classCtrl from 'js/classes/controllers/class-ctrl';

export default function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/classes');
    $stateProvider
    .state('classes', {
        url: '/classes',
        templateUrl: 'views/classes/classes.html',
        controller: classCtrl,
        controllerAs: 'classCtrl'
    });
}
