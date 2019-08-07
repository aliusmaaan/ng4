export default /*@ngInject*/ function($rootScope, $state) {
    this.classname = 'myCreightonApp';
    $rootScope.isMenu = $state.current.name;
    this.classes = [{subject: 'English', topic: 'current affairs', by: 'Tom', time: 'MWF 1pm-2pm', date: '12 jan', location: 'Build 6' },
    {subject: 'political science', topic: 'Politics in US', by: 'Adam', time: 'MWF 10am-11am', date: '13 Feb', location: 'Build 3' }];
}
