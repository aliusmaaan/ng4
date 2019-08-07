export default /*@ngInject*/ function ($rootScope, $state, $window) {
    $rootScope.isMenu = $state.current.name;
    this.goback = () => {
        $window.history.go(-1);
    };
}