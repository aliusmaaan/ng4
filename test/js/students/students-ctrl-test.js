import mainCtrl from 'js/students/controllers/students-ctrl.js'; 

describe('Main controller', () => {
    let ctrl;
    let scope;

    beforeEach(angular.mock.module('myCreightonApp'));

    beforeEach(inject(($controller, $rootScope) => {
        scope = $rootScope.$new();

        ctrl = $controller(mainCtrl, {
            $scope: scope
        });
    }));

    it('should set application name on controller', () => {
        expect(ctrl.applicationName).toEqual('myCreightonApp')
    });
});
