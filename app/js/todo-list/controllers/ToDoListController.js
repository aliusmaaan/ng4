export default /*@ngInject*/ function ($rootScope, $state) {
    $rootScope.isMenu = $state.current.name; 
    this.toDoList = true;
    this.toDoAdd = false;
    this.showAddToDo = () => {
        this.toDoList = false;
        this.toDoAdd = true;
    };
    this.todos = [
        { text: 'Learn AngularJS', done: false },
        { text: 'Build an app', done: false }
    ];
    this.getTotalTodos = () => {
        return this.todos.length;
    };
    this.addTodo = () => {
        this.todos.push({ text: this.formTodoText, done: false });
        this.formTodoText = '';
        this.toDoList = true;
        this.toDoAdd = false;
    };
}
