import 'views/next-events/next-events.html';
import nextEventsCtrl from 'js/next-events/controllers/nextEvents';

export default function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/events');
    $stateProvider
        .state('events', {
            url: '/events',
            templateUrl: 'views/next-events/next-events.html',
            controller: nextEventsCtrl,
            controllerAs: 'nextEventsCtrl'
        });
}
