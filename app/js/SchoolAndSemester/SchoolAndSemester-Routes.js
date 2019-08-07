import 'views/SchoolAndSemester/SchoolAndSemester.html';
import schoolAndSemesterCtrl from 'js/SchoolAndSemester/controllers/schoolAndSemester-Ctrl';

export default function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/schoolandsemester');
    $stateProvider
        .state('schoolandsemester', {
            url: '/schoolandsemester',
            templateUrl: 'views/SchoolAndSemester/SchoolAndSemester.html',
            controller: schoolAndSemesterCtrl,
            controllerAs: 'schoolAndSemesterCtrl',
        });
}
