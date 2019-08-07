let search = {
    bindings: {
        items: '='
    },
    /*template: '<input type="text" class="form-control" ng-model = "$ctrl.items" placeholder="search">',*/
    template: ' <ul class="list-group" >' +
    '<li class="list-group-item"  ng-repeat="todo in $ctrl.items">' +
    '<div class="radio">' +
    '<label><input type="radio" name="optradio" class="pull-left" ng-model="todo.done"><div><p >Date</p>' +
    '<h3>{{todo.text}}</h3>' +
    '</div></label>' +
    '</div>' +
    '</li>' +
    '</ul>',
    controller: function () {
    }
};

export default search;
