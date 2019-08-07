import 'views/todo-list/ToDoList.html';
import toDoListCtrl from 'js/todo-list/controllers/ToDoListController';

export default /*@ngInject*/ function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/toDO');

    $stateProvider
        .state('toDo', {
            url: '/toDo',
            templateUrl: 'views/todo-list/ToDoList.html',
            controller: toDoListCtrl,
            controllerAs: 'toDoListCtrl',
        });
}
