export default /*@ngInject*/ function ($rootScope, $state) {
    $rootScope.isMenu = $state.current.name; 
}