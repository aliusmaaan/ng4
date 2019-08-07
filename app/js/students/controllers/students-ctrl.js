import _ from 'lodash';
export default /*@ngInject*/ function(httputil, $state, $rootScope) {
    this.applicationName = 'myCreightonApp';
    $rootScope.isMenu = $state.current.name; 
    this.userName = 'creighton';
    httputil.getMethod('js/students/Users.json')
        .then(response => {
                this.items = response;
            });
    
    this.login = (name, pass) => {
       let userObj = _.find(this.items, {'name': name, 'pass': pass});
        if (userObj) {
            $state.go('home.first', {userName: userObj.name});
        } else {
            this.wrongpassFlag = true;
        }
    };
}
