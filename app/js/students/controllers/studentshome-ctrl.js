export default /*@ngInject*/ function(httputil, APIconstants, $state, $rootScope) {
    this.screenName = 'Home Screen';
    this.index = 0;
    this.userName = $state.params.userName;
    $rootScope.isMenu = $state.current.name; 
    this.save = () => {
        this.test = 'Name';
        httputil.getMethod(APIconstants.BASEURL + APIconstants.GET)
        .then(response => {
                this.items = response;
            });
    };
    this.additem = () => {
         httputil.postMethod(APIconstants.BASEURL + APIconstants.POST, this.data)
        .then(response => {
                this.newitem = response;
            });
    };
    this.updateitem = () => {
         httputil.putMethod(APIconstants.BASEURL + APIconstants.POST + '/1', this.data)
        .then(response => {
                this.newitem = response;
            });
    };
    this.deleteitem = () => {
         httputil.deleteMethod(APIconstants.BASEURL + APIconstants.POST + '/1', this.data)
        .then(() => {
                this.newitem = null;
            });
    };
}
